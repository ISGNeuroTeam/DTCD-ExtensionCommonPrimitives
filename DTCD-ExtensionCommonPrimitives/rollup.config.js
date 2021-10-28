import { nodeResolve } from '@rollup/plugin-node-resolve';
import img from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

const watch = Boolean(process.env.ROLLUP_WATCH);

const pluginName = 'ExtensionCommonPrimitives';

const output = watch
  ? `./../../DTCD/server/plugins/DTCD-${pluginName}/${pluginName}.js`
  : `./build/${pluginName}.js`;

const plugins = [commonjs(), nodeResolve(), img()];

export default {
  input: `./src/${pluginName}.js`,
  output: {
    file: output,
    format: 'esm',
    sourcemap: false,
  },
  watch: {
    include: ['./src/**/*'],
  },
  plugins,
};
