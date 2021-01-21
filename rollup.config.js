import commonjs from '@rollup/plugin-commonjs';
import gzip from 'rollup-plugin-gzip';
import typescript from '@rollup/plugin-typescript';
import { bundleSize } from './rollup-plugin-bundle-size';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export const preferences = {
  input: './src/index.ts',
  output: {
    format: 'iife',
    name: 'EasyForm',
  },
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
      plugins: [terser(), gzip()],
    },
  ],
  plugins: [typescript(), nodeResolve(), commonjs(), bundleSize()],
};
