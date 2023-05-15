import icon from './icon.svg';
import {NodeWithDefaultLabel} from '../../../../DTCD-SDK';

export default class RichLabelNode extends NodeWithDefaultLabel {
  static getPrimitiveInfo() {
    return {
      icon,
      title: 'RichLabelNode',
      name: 'RichLabelNode',
      groups: ['Стандартные элементы'],
    };
  }

  constructor(yFiles) {
    super(yFiles)
    this.yfiles = yFiles.default;

    this.instance.tag.defaultLabel = ``
    this.instance.tag.defaulInitialtLabel = ``
  }

  create() {
    const {
      ShapeNodeStyle,
      Rect,
      Font,
      MarkupLabelStyle,
      HorizontalTextAlignment,
      TextWrapping,
    } = this.yfiles;


    this.instance.layout = new Rect(0, 0, 294, 148);
    this.instance.style = new ShapeNodeStyle({
      shape: 'round-rectangle',
      stroke: '4px #480607',
      fill: '#fff',
    });

    const customLabelStyle = new MarkupLabelStyle({
      font: new Font('"Segoe UI", Arial', 12),
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const properties = {};

    this.instance.tag = {...this.instance.tag, customLabelStyle, properties };

    return this.instance;
  }
}
