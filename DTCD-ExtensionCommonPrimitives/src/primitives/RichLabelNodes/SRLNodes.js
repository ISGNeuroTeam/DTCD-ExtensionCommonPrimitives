import icon11 from './../RichIcons/1_in_1_out_blue.svg';
import icon12 from './../RichIcons/1_in_2_out_blue.svg';
import icon13 from './../RichIcons/1_in_3_out_blue.svg';
import icon21 from './../RichIcons/2_in_1_out_blue.svg';
import icon22 from './../RichIcons/2_in_2_out_blue.svg';
import icon23 from './../RichIcons/2_in_3_out_blue.svg';
import icon31 from './../RichIcons/3_in_1_out_blue.svg';
import icon32 from './../RichIcons/3_in_2_out_blue.svg';
import icon33 from './../RichIcons/3_in_3_out_blue.svg';
import RichLabelNode from './RichLabelNode'

const icons = {icon11, icon12, icon13, icon21, icon22, icon23, icon31, icon32, icon33}
const primitiveClasses = []

for (let i = 1; i < 4; i++) {
  for (let j = 1; j < 4; j++) {
    const primitiveClass = new Function('RichLabelNode','icon', `
      return class SRLN${i}${j} extends RichLabelNode {
        static getPrimitiveInfo() {
          return {
            title: 'Step Rich Label',
            name: 'StepRichLabelNode${i}${j}',
            groups: ['ФГК'],
            icon,
          };
        }
      
        constructor(yFiles) {
          const strokeColor = '#32ADE6';
          super(yFiles, strokeColor, ${i}, ${j});
        }
      }
    `)( RichLabelNode, icons[`icon${i}${j}`])
    
    primitiveClasses.push(primitiveClass)
  }
}

export default primitiveClasses;