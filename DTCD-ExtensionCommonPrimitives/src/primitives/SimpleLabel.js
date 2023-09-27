import icon from './simple-label.svg';

export default class SimpleLabel {
  static getPrimitiveInfo() {
    return {
      title: 'Надпись',
      name: 'SimpleLabel',
      groups: ['Стандартные элементы'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles;
  }

  create(owner) {
    const instance = new this.yfiles.SimpleLabel(owner, 'label');
    return instance;
  }
}
