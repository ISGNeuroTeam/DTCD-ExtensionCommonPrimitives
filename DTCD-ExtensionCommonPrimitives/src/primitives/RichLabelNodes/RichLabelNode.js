export default class ObjectModelPrimitive {
  
  constructor(yFiles, strokeColor) {
    this.yfiles = yFiles.default;
    this.strokeColor = strokeColor;
  }

  create() {
    const {
      SimpleNode,
      ShapeNodeStyle,
      Rect,
      Font,
      MarkupLabelStyle,
      HorizontalTextAlignment,
      TextWrapping
    } = this.yfiles;

    const font = new Font('"Segoe UI", Arial', 12)
    const customLabelStyle = new MarkupLabelStyle({
      font: font,
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20]
    });

    const instance = new SimpleNode();
    instance.style = new ShapeNodeStyle({
      shape: 'round-rectangle',
      stroke: `4px ${this.strokeColor}`,
      fill: '#fff'
    });
    instance.layout = new Rect(0, 0, 294, 148);
    instance.tag = {
      properties: {
        transfomationField: {
          expression: '',
          type: 'expression',
        },
      },
    };

    instance.tag.customLabelStyle = customLabelStyle;
    return instance;
  }
}
