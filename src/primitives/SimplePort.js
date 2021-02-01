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
    const { SimplePort, Rect } = yFiles.default;
    Object.assign(this, new SimplePort());
  }
}
