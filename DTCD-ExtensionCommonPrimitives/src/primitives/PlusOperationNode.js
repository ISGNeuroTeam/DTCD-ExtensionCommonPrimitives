import icon from './plus.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел сложения',
      name: 'PlusOperation',
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
      shape: this.yfiles.ShapeNodeShape.ELLIPSE,
      stroke: 'rgb(255, 140, 70)',
      fill: 'rgb(255, 140, 70)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 40, 40);
    instance.tag = {
      properties: {
        prop1: {
          value: '',
          type: 'expression',
        },
        prop2: {
          value: '',
          type: 'expression',
        },
        prop3: {
          value: '',
          type: 'expression',
        },
      },
    };
    return instance;
  }
}
