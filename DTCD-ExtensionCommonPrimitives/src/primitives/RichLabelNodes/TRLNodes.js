import icon1 from './../RichIcons/1_in_indigo.svg';
import icon2 from './../RichIcons/2_in_indigo.svg';
import icon3 from './../RichIcons/3_in_indigo.svg';
import RichLabelNode from './RichLabelNode'

const icons = {icon1, icon2, icon3}
const primitiveClasses = []

for (let j = 1; j < 4; j++) {
  const primitiveClass = new Function('RichLabelNode','icon', `
    return class TRLN${j} extends RichLabelNode {
      static getPrimitiveInfo() {
        return {
          title: 'Target Rich Label',
          name: 'TargetRichLabelNode${j}',
          groups: ['ФГК'],
          icon,
        };
      }
    
      constructor(yFiles) {
        const strokeColor = '#5856D6';
        super(yFiles, strokeColor, ${j}, 0);
      }
    }
  `)( RichLabelNode, icons[`icon${j}`])
  
  primitiveClasses.push(primitiveClass)
}

export default primitiveClasses;