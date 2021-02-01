import icon from './simple-label.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Надпись',
      name: 'SimpleLabel',
      groups: ['Common', 'Label'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }
  create(owner) {
    const instance = new this.yfiles.SimpleLabel(owner, 'label');
    return instance;
  }
}
