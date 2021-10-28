import icon from '../transform.svg';
import RichLabelNode from './RichLabelNode'

export default class ObjectModelPrimitive extends RichLabelNode {
  static getPrimitiveInfo() {
    return {
      title: 'Target Rich Label',
      name: 'TargetRichLabelNode',
      groups: ['ФГК'],
      icon,
    };
  }

  constructor(yFiles) {
    const strokeColor = '#5856D6';
    super(yFiles, strokeColor);
  }
}
