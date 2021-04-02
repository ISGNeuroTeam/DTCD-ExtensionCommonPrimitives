import icon from './transform.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел транформатор',
      name: 'TransformationNode',
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
      stroke: 'rgb(0, 0, 30)',
      fill: 'rgb(252, 219, 3)',
      label: 'Computer',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
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
