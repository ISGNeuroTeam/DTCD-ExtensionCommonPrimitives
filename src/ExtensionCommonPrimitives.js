import primitives from './primitives';
import { ExtensionPlugin } from '../../DTCD-SDK';

export class DataCADPlugin extends ExtensionPlugin {
  static getRegistrationMeta() {
    return {
      type: 'extensionPrimitives',
      target: 'PanelPrimitiveLibrary',
      title: 'Расширение библиотеки примитивов Test',
      name: 'ExtensionCommonPrimitives',
      actions: [],
      events: [],
      requirements: ['yfiles.js'],
    };
  }

  static register(pluginRegistrator) {
    pluginRegistrator.register(DataCADPlugin.getRegistrationMeta());
  }

  static getExtensionInfo() {
    const result = [];
    primitives.forEach(primitive => {
      const primitiveInfo = primitive.getPrimitiveInfo();
      primitiveInfo.extensionName = this.getRegistrationMeta().name;
      primitiveInfo.primitiveName = primitiveInfo.name;
      result.push(primitiveInfo);
    });
    return result;
  }

  constructor(guid, yFiles) {
    this.getRegistrationMeta = DataCADPlugin.getRegistrationMeta;
    this.getExtensionInfo = DataCADPlugin.getExtensionInfo;
    this.primitives = {};
    primitives.forEach(PrimitiveClass => {
      const { name } = PrimitiveClass.getPrimitiveInfo();
      this.primitives[name] = PrimitiveClass.bind(null, yFiles);
    });
  }
}
