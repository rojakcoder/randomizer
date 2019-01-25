import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss'; // This must be imported in order to compile SCSS.
import scss from 'rollup-plugin-scss';

var plugins = [
  css(
    //{
    //  output: 'dist/main.css'
    //}
  ),
  vue({
    css: false
  }),
  resolve({
    jsnext: true,
    main: true,
    browser: true
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
];

//if (process.env.NODE_ENV === 'production') {
//  plugins.push(uglify());
//}
//if (process.env.NODE_ENV === 'development') {
//  plugins.push(livereload('dist'));
//}

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/build.min.js',
      sourcemap: true,
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
        output: 'dist/main.css'
      })
    ]
  }
];

