import icon from './group-node.svg';
import {AbstractNode} from '../../../../DTCD-SDK';

export default class ObjectModelPrimitive extends AbstractNode {
  static getPrimitiveInfo() {
    return {
      icon,
      name: 'Group',
      title: 'Группа',
      groups: ['Стандартные элементы'],
    };
  }

  constructor(yFiles) {
    super(yFiles)
  }

  create() {
    const { Rect, GroupNodeStyle } = this.yfiles;

    this.instance.layout = new Rect(0, 0, 300, 300);

    this.instance.style = new GroupNodeStyle({
      tabFill: '#f0c808',
      groupIcon: 'minus',
      contentAreaInsets: 20,
    });

    this.instance.tag = {
      type: 'group',
      properties: {},
    };

    return this.instance;
  }
}
