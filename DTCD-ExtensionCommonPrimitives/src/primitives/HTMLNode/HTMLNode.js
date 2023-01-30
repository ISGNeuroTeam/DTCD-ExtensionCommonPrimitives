import icon from './icon.svg';
import createHtmlLabelStyle from './createHtmlLabelStyle';

export default class HTMLNode {
  static getPrimitiveInfo() {
    return {
      icon,
      name: 'HTMLNode',
      title: 'HTML',
      groups: ['HTML'],
    };
  }

  #yFiles;
  #size = [200, 200];

  constructor(yFiles) {
    this.#yFiles = yFiles.default;
  }

  create() {
    const { SimpleNode, Rect, Font, ShapeNodeStyle } = this.#yFiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, ...this.#size);

    instance.style = new ShapeNodeStyle({
      shape: 'rectangle',
      fill: 'white',
      stroke: '1px solid #757575'
    });

    const HtmlLabelStyle = createHtmlLabelStyle(this.#yFiles);
    const font = new Font('"Segoe UI", Arial', 12);
    const customLabelStyle = new HtmlLabelStyle(font);

    const properties = {
      HTML: {
        type: 'expression',
        expression: '`<h1>HTMLNode</h1>`',
      }
    };
    instance.tag = { customLabelStyle, properties };

    return instance;
  }
}
