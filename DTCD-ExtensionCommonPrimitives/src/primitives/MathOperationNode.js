import icon from './plus.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел математики',
      name: 'MathOperation',
      groups: ['Математические узлы'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles;
  }

  create() {
    const instance = new this.yfiles.SimpleNode();
    instance.style = new this.yfiles.ShapeNodeStyle({
      shape: this.yfiles.ShapeNodeShape.ELLIPSE,
      stroke: 'rgb(0, 0, 30)',
      fill: 'rgb(255, 140, 70)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 40, 40);
    instance.tag = {
      properties: {
        mathField: {
          expression: '',
          type: 'expression',
        },
      },
    };
    return instance;
  }
}
