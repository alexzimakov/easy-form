import dev from 'rollup-plugin-dev';
import { preferences } from './rollup.config';

export default function devConfig(args) {
  const plugins = [...preferences.plugins];

  if (args.watch) {
    plugins.push(
      dev({
        dirs: ['./demo'],
        host: 'localhost',
        port: 1234,
      })
    );
  }

  return {
    input: preferences.input,
    output: {
      ...preferences.output,
      file: './demo/js/easy-form.js',
    },
    plugins,
  };
}
