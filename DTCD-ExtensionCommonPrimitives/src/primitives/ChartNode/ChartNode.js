import icon from './icon.svg';
import createHtmlLabelStyle from '../../utils/createHtmlLabelStyle';

export default class ChartNode {
  static getPrimitiveInfo() {
    return {
      icon,
      name: 'ChartNode',
      title: 'ChartNode',
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
      _init: {
        type: 'expression',
        expression: ``,
      },
      _chartData: {
        type: 'expression',
        expression: `[]`,
      }
    };
    instance.tag = { customLabelStyle, properties };

    return instance;
  }
}
