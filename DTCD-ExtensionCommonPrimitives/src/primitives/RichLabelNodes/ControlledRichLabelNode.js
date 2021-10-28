import icon from '../transform.svg';
import RichLabelNode from './RichLabelNode'

export default class ObjectModelPrimitive extends RichLabelNode {
  static getPrimitiveInfo() {
    return {
      title: 'Controlled Rich Label',
      name: 'ControlledRichLabelNode',
      groups: ['ФГК'],
      icon,
    };
  }

  constructor(yFiles) {
    const strokeColor = '#00C7BE';
    super(yFiles, strokeColor);
  }
}
