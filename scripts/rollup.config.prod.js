import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss'; // This must be imported in order to compile SCSS.
import scss from 'rollup-plugin-scss';
import minify from 'rollup-plugin-minify-es';

var plugins = [
  vue({
    css: false
  }),
  //babel({
  //  runtimeHelpers: true,
  //  sourceMap: true,
  //  extensions: ['.js', '.vue']
  //}),
  css(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  resolve(),
  minify()
];

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/build.min.js',
      format: 'iife'
    },
    plugins
  },
  {
    input: 'sass/main.js',
    output: {
      file: 'dist/main.js',
      format: 'iife'
    },
    plugins: [
      scss({
        outputStyle: 'compressed',
        output: 'dist/main.css'
      })
    ]
  }
];


