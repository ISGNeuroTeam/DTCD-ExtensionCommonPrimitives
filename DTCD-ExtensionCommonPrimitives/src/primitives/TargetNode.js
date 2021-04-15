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
      stroke: 'rgb(0, 0, 30)',
      fill: 'rgb(255, 140, 70)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    instance.tag = {
      properties: {
        name: {
          expression: '',
          type: 'expression',
        },
        description: {
          expression: '',
          type: 'expression',
        },
        target_value: {
          expression: '',
          type: 'expression',
        },
        dimenstion: {
          expression: '',
          type: 'expression',
        },
        risk_appetite: {
          expression: '',
          type: 'expression',
        },
        countermeasure_costs: {
          expression: '',
          type: 'expression',
        },
      },
    };
    return instance;
  }
}
