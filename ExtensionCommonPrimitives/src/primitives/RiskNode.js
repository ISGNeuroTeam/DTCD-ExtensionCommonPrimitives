import icon from './simple-node.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'RiskNode',
      name: 'Узел рискового сценария',
      groups: ['ФГК'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }

  create() {
    const instance = new this.yfiles.SimpleNode();
    instance.style = new this.yfiles.ShapeNodeStyle({
      shape: this.yfiles.ShapeNodeShape.RECTANGLE,
      stroke: 'rgb(240, 79, 183)',
      fill: 'rgb(240, 79, 183)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    return instance;
  }
}
