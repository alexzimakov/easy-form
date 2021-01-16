import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import { bundleSize } from './rollup-plugin-budnle-size';

export const preferences = {
  input: './src/index.ts',
  output: {
    format: 'iife',
    name: 'easyForm',
    sourcemap: true,
  },
  plugins: [typescript()],
};

export default {
  input: preferences.input,
  output: [
    {
      ...preferences.output,
      file: './dist/easy-form.js',
      plugins: [],
    },
    {
      ...preferences.output,
      file: './dist/easy-form.min.js',
      plugins: [terser()],
    },
  ],
  plugins: [...preferences.plugins, bundleSize()],
};
