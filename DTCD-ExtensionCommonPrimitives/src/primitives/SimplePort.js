import icon from './dot.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Порт',
      name: 'SimplePort',
      groups: ['Common'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }

  create() {
    const { SimplePort } = this.yfiles;
    return new SimplePort();
  }
}
