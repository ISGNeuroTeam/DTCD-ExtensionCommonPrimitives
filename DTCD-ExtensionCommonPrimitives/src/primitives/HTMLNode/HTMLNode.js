import icon from './icon.svg';
import createHtmlLabelStyle from '../../utils/createHtmlLabelStyle';
import { AbstractNode } from '../../../../DTCD-SDK';

export default class HTMLNode extends AbstractNode {
  static getPrimitiveInfo() {
    return {
      icon,
      name: 'HTMLNode',
      title: 'HTML',
      groups: ['Стандартные элементы'],
    };
  }

  #size = [200, 200];

  constructor(yFiles) {
    super(yFiles);
  }

  create() {
    const { Rect, Font, ShapeNodeStyle } = this.yFiles;

    this.instance.layout = new Rect(0, 0, ...this.#size);

    this.instance.style = new ShapeNodeStyle({
      shape: 'rectangle',
      fill: 'white',
      stroke: '1px solid #757575'
    });

    const HtmlLabelStyle = createHtmlLabelStyle(this.yFiles);
    const font = new Font('"Segoe UI", Arial', 12);
    const customLabelStyle = new HtmlLabelStyle(font);

    const properties = {
      HTML: {
        type: 'expression',
        expression: '`<h1>HTMLNode</h1>`',
      }
    };

    this.instance.tag = { customLabelStyle, properties };

    return this.instance;
  }
}
