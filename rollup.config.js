import {nodeResolve} from '@rollup/plugin-node-resolve';
import img from '@rollup/plugin-image';

const watch = Boolean(process.env.ROLLUP_WATCH) || Boolean(process.env.LIVERELOAD);

const pluginName = 'ExtensionCommonPrimitives';

const output = watch ? `./../DataCAD/Mock_server/plugins/${pluginName}.js` : `./dist/${pluginName}.js`;

const plugins = [nodeResolve(), img()];

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
