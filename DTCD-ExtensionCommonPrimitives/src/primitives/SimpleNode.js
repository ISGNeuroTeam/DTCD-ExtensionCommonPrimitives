import icon from './simple-node.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел',
      name: 'SimpleNode',
      groups: ['Стандартные элементы'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles;
  }

  create() {
    const instance = new this.yfiles.SimpleNode();
    instance.style = new this.yfiles.ShapeNodeStyle({
      shape: this.yfiles.ShapeNodeShape.ROUND_RECTANGLE,
      stroke: 'rgb(255, 140, 0)',
      fill: 'rgb(255, 140, 0)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 40, 40);
    return instance;
  }
}
