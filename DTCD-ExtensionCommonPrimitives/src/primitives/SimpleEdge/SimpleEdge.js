import icon from './simple-edge.svg';
import { AbstractGraphElement } from '../../../../DTCD-SDK';

export default class SimpleEdge extends AbstractGraphElement {
  static getPrimitiveInfo() {
    return {
      title: 'Связь',
      name: 'SimpleEdge',
      groups: ['Стандартные элементы'],
      icon,
    };
  }

  instance;

  constructor(yFiles) {
    super(yFiles);
  }

  create() {
    this.instance = new this.yFiles.SimpleEdge();
    this.instance.style = new this.yFiles.PolylineEdgeStyle();
    return this.instance;
  }
}
