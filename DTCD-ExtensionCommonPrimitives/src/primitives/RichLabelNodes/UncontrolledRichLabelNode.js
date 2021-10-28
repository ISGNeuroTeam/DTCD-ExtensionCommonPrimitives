import icon from '../transform.svg';
import RichLabelNode from './RichLabelNode'

export default class ObjectModelPrimitive extends RichLabelNode {
  static getPrimitiveInfo() {
    return {
      title: 'Uncontrolled Rich Label',
      name: 'UncontrolledRichLabelNode',
      groups: ['ФГК'],
      icon,
    };
  }

  constructor(yFiles) {
    const strokeColor = '#CD5D67';
    super(yFiles, strokeColor);
  }
}