// import SimpleNode from './SimpleNode';
import SimpleEdge from './SimpleEdge';
// import DashedEdge from './DashedEdge';
// import TargetNode from './TargetNode';
// import RiskNode from './RiskNode';
// import TransformationNode from './TransformationNode';
import MathOperationNode from './MathOperationNode';
// import InPort from './InPort';
// import OutPort from './OutPort';
import CRLNodes from './RichLabelNodes/CRLNodes'
import URLNodes from './RichLabelNodes/URLNodes'
import SRLNodes from './RichLabelNodes/SRLNodes'
import TRLNodes from './RichLabelNodes/TRLNodes'


export default [
  SimpleEdge,
  MathOperationNode,
  ...CRLNodes,
  ...URLNodes,
  ...SRLNodes,
  ...TRLNodes
];
