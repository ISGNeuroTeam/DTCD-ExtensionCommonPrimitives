import icon from './simple-edge.svg';
import { AbstractGraphElement }  from '../../../DTCD-SDK'

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
    super(yFiles)
  }

  create() {
    this.instance = new this.yfiles.SimpleEdge();
    this.instance.style = new this.yfiles.PolylineEdgeStyle();
    return  this.instance;
  }
}
