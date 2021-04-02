import icon from './targetNode.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел цель',
      name: 'TargetNode',
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
      stroke: 'rgb(255, 140, 70)',
      fill: 'rgb(255, 140, 70)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    instance.tag = {
      properties: {
        prop1: {
          value: null,
        },
        prop2: {
          value: null,
        },
        prop3: {
          value: null,
        },
      },
    };
    return instance;
  }
}
