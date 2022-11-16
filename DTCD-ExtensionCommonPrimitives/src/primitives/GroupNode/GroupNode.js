import icon from './group-node.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      icon,
      name: 'Group',
      title: 'Группа',
      groups: ['Группировки'],
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles.default;
  }

  create() {
    const { SimpleNode, Rect, GroupNodeStyle } = this.yfiles;

    const instance = new SimpleNode();
    instance.layout = new Rect(0, 0, 300, 300);

    instance.style = new GroupNodeStyle({
      tabFill: '#f0c808',
      contentAreaInsets: 20,
    });

    instance.tag = {
      type: 'group',
      properties: {},
    };

    return instance;
  }
}
