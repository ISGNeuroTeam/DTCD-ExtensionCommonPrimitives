export default class ObjectModelPrimitive {
  constructor(yFiles, strokeColor, inPortsCount, outPortsCount) {
    this.yfiles = yFiles.default;
    this.strokeColor = strokeColor;
    this.inPortsCount = inPortsCount;
    this.outPortsCount = outPortsCount;
  }

  create() {
    const {
      SimpleNode,
      ShapeNodeStyle,
      Rect,
      Font,
      MarkupLabelStyle,
      HorizontalTextAlignment,
      TextWrapping,
    } = this.yfiles;

    const font = new Font('"Segoe UI", Arial', 12);
    const customLabelStyle = new MarkupLabelStyle({
      font: font,
      horizontalTextAlignment: HorizontalTextAlignment.LEFT,
      wrapping: TextWrapping.WORD_ELLIPSIS,
      insets: [20, 20],
    });

    const instance = new SimpleNode();
    instance.style = new ShapeNodeStyle({
      shape: 'round-rectangle',
      stroke: `4px ${this.strokeColor}`,
      fill: '#fff',
    });
    instance.layout = new Rect(0, 0, 294, 148);
    instance.tag = {
      properties: {
        testField: {
          expression: '',
          type: 'expression',
        },
      },
      initPorts: [],
    };

    for (let i = 0; i < this.inPortsCount; i++) {
      instance.tag.initPorts.push({
        primitiveName: `inPort${i + 1}`,
        type: 'IN',
        portPosition: {
          x:
            this.inPortsCount === 1
              ? 0.5
              : this.inPortsCount === 2
              ? [0.2, 0.8][i]
              : [0.2, 0.5, 0.8][i],
          y: 1.02,
        },
        properties: {
          status: {
            expression: `let portOwner = graph.ports.find(port => port.tag.primitiveID === primitiveID).owner;
let inEdges = graph.inEdgesAt(portOwner).filter(edge => edge.targetPort.tag.primitiveID === primitiveID).toArray()
if (inEdges.length < 1) ''
else {
eval(inEdges[0].sourcePort.tag.primitiveID).status
}`,
            type: 'expression',
          },
        },
      });
    }

    for (let i = 0; i < this.outPortsCount; i++) {
      instance.tag.initPorts.push({
        primitiveName: `outPort${i + 1}`,
        type: 'OUT',
        portPosition: {
          x:
            this.outPortsCount === 1
              ? 0.5
              : this.outPortsCount === 2
              ? [0.2, 0.8][i]
              : [0.2, 0.5, 0.8][i],
          y: -0.02,
        },
        properties: {
          status: {
            expression: ``,
            type: 'expression',
          },
        },
      });
    }

    instance.tag.customLabelStyle = customLabelStyle;
    return instance;
  }
}
