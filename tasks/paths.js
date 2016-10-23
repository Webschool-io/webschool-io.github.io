
'use strict'

module.exports = {
  js: {
    src: [
      // `${process.cwd()}/src/js/lib/nprogress/nprogress.js`,
      `${process.cwd()}/src/js/lib/zepto/zepto.js`,
      // `${process.cwd()}/src/js/lib/zepto_lazyload/jquery.lazyload.js`,
      `${process.cwd()}/src/js/core.js`,
      `${process.cwd()}/src/js/router.js`,
      `${process.cwd()}/src/js/ajax.js`,
      `${process.cwd()}/src/js/load-authors.js`,
      `${process.cwd()}/src/js/load-authors-list.js`,
      `${process.cwd()}/src/js/main.js`
    ],
    dest: `${process.cwd()}/assets/js/`
  },

  postcss: {
    src: `${process.cwd()}/src/postcss/main.css`,
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
    posts: `${process.cwd()}/_posts/**/*.{md,markdown}`,
    postcss: `${process.cwd()}/src/postcss/**/*.css`
  }
}
