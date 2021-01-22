import commonjs from '@rollup/plugin-commonjs';
import dev from 'rollup-plugin-dev';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { preferences } from './rollup.config';

export default function devConfig(args) {
  const plugins = [typescript({ sourceMap: true }), nodeResolve(), commonjs()];

  if (args.watch) {
    plugins.push(
      dev({
        dirs: ['./docs'],
        host: 'localhost',
        port: 1234,
        extend(app, { router, send }) {
          app.use(router.get('/src/*', (ctx) => send(ctx, ctx.path)));
        },
      })
    );
  }

  return {
    input: preferences.input,
    output: {
      ...preferences.output,
      file: './docs/js/easy-form.js',
      sourcemap: true,
    },
    plugins,
  };
}
