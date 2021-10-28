import icon from '../transform.svg';
import RichLabelNode from './RichLabelNode'

export default class ObjectModelPrimitive extends RichLabelNode {
  static getPrimitiveInfo() {
    return {
      title: 'Step Rich Label',
      name: 'StepRichLabelNode',
      groups: ['ФГК'],
      icon,
    };
  }

  constructor(yFiles) {
    const strokeColor = '#32ADE6';
    super(yFiles, strokeColor);
  }
}
