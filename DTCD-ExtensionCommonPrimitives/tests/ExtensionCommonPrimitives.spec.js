import { ExtensionCommonPrimitives } from '../src/ExtensionCommonPrimitives';

describe('ExtensionCommonPrimitives:getRegistrationMeta', () => {
  test('should be defined', () => {
    expect(ExtensionCommonPrimitives.getRegistrationMeta).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionCommonPrimitives.getRegistrationMeta()).toEqual({
      type: 'extension',
      target: expect.any(Array),
      title: 'Расширение библиотеки примитивов Common',
      name: 'ExtensionCommonPrimitives',
      version: expect.any(String),
    });
  });
});

describe('ExtensionCommonPrimitives:getExtensionInfo', () => {
  test('should be defined', () => {
    expect(ExtensionCommonPrimitives.getExtensionInfo).toBeDefined();
  });

  test('should return proper data', () => {
    expect(ExtensionCommonPrimitives.getExtensionInfo()).toEqual(expect.any(Array));
  });
});
