import icon from './risk.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Узел рискового сценария',
      name: 'RiskNode',
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
      fill: 'rgb(240, 79, 183)',
    });
    instance.layout = new this.yfiles.Rect(0, 0, 130, 60);
    instance.tag = {
      properties: {
        realization_description: {
          expression: '',
          type: 'expression',
        },
        year_probability: {
          expression: '',
          type: 'expression',
        },
        max_damage_value: {
          expression: '',
          type: 'expression',
        },
        influence_percentage: {
          expression: '',
          type: 'expression',
        },
      },
    };
    return instance;
  }
}
