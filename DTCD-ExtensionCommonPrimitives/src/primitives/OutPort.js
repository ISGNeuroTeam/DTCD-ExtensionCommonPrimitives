import icon from './dot.svg';

export default class ObjectModelPrimitive {
  static getPrimitiveInfo() {
    return {
      title: 'Порт OUT',
      name: 'outPort',
      groups: ['Порты'],
      icon,
    };
  }

  constructor(yFiles) {
    this.yfiles = yFiles;
  }

  create() {
    const { SimplePort } = this.yfiles;
    let port = new SimplePort();
    port.tag = {
      type: 'OUT',
      properties: {
        status: {
          expression: '',
          type: 'expression',
        },
      },
    };
    return port;
  }
}
