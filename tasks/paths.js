
'use strict'

module.exports = {
  js: {
    src: [
      `${process.cwd()}/src/js/lib/nprogress/nprogress.js`,
      `${process.cwd()}/src/js/lib/zepto/zepto.js`,
      `${process.cwd()}/src/js/lib/zepto_lazyload/jquery.lazyload.js`,
      `${process.cwd()}/src/js/*.js`
    ],
    dest: `${process.cwd()}/assets/js/`
  },

  postcss: {
    src: [
      `${process.cwd()}/src/js/lib/nprogress/nprogress.css`,
      `${process.cwd()}/src/postcss/main.css`
    ],
    dest: `${process.cwd()}/assets/css/`
  },

  images: {
    src: `${process.cwd()}/src/img/**/*.{png,jpg,gif,svg}`,
    dest: `${process.cwd()}/assets/img/`
  },

  watch: {
    index: `${process.cwd()}/*.html`,
    includes: `${process.cwd()}/_includes/**/*.html`,
    layouts: `${process.cwd()}/_layouts/**/*.html`,
    posts: `${process.cwd()}/_posts/**/*.{md,markdown}`
  }
}
