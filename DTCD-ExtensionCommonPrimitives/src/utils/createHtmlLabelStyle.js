const createRenderDataCache = (label, font) => {
  const { text, layout } = label;
  return { text, font, layout };
};

export default (yFiles) => {
  const { LabelStyleBase, Size, SvgVisual, YObject } = yFiles;
  return class HtmlLabelStyle extends LabelStyleBase {
    constructor(font) {
      super();
      this.font = font;
    }

    createVisual(context, label) {
      const labelLayout = label.layout;

      const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      foreignObject.setAttribute('x', '0');
      foreignObject.setAttribute('y', '0');
      foreignObject.setAttribute('width', `${labelLayout.width}`);
      foreignObject.setAttribute('height', `${labelLayout.height}`);

      const div = document.createElement('div');
      div.innerHTML = label.text;

      div.style = `
        overflow: auto;
        position: relative;
        width: ${labelLayout.width}px;
        height: ${labelLayout.height}px;
        font-family: ${this.font.fontFamily};
        font-size: ${this.font.fontSize}px;
        font-weight: ${this.font.fontWeight};
        font-style: ${this.font.fontStyle};
      `;

      foreignObject.appendChild(div);

      const transform = LabelStyleBase.createLayoutTransform(context, label.layout, true);
      transform.applyTo(foreignObject);

      foreignObject['data-cache'] = createRenderDataCache(label, this.font);

      return new SvgVisual(foreignObject);
    }

    updateVisual(context, oldVisual, label) {
      const element = oldVisual.svgElement;

      if (element === null || element.childElementCount !== 1) {
        return this.createVisual(context, label);
      }

      const oldCache = element['data-cache'];
      const newCache = createRenderDataCache(label, this.font);

      const foreignObject = element;
      const div = foreignObject.firstElementChild;

      if (!YObject.equals(oldCache.layout, newCache.layout)) {
        const labelLayout = label.layout;
        foreignObject.setAttribute('width', `${labelLayout.width}`);
        foreignObject.setAttribute('height', `${labelLayout.height}`);

        div.style.setProperty('width', `${labelLayout.width}px`);
        div.style.setProperty('height', `${labelLayout.height}px`);
      }

      if (!oldCache.font.equals(newCache.font)) {
        div.style.setProperty('font-family', this.font.fontFamily);
        div.style.setProperty('font-size', `${this.font.fontSize}px`);
        div.style.setProperty('font-weight', `${this.font.fontWeight}`);
        div.style.setProperty('font-style', `${this.font.fontStyle}`);
      }

      if (oldCache.text !== newCache.text) {
        div.innerHTML = label.text;
      }

      element['data-cache'] = newCache;

      const transform = LabelStyleBase.createLayoutTransform(context, label.layout, true);
      transform.applyTo(foreignObject);

      return oldVisual;
    }

    getPreferredSize(label) {
      const div = document.createElement('div');
      div.style.setProperty('display', 'inline-block');
      div.innerHTML = label.text;
      document.body.appendChild(div);
      const clientRect = div.getBoundingClientRect();
      document.body.removeChild(div);
      return new Size(clientRect.width, clientRect.height);
    }
  }
};
