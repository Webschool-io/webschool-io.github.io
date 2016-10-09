
// Modules
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import browserSync from 'browser-sync'

import postcss from 'gulp-postcss'
import precss from 'precss'
import postcssInstagram from 'postcss-instagram'
import postcssAnimation from 'postcss-animation'
import postcssClean from 'postcss-clean'

// Paths
import path from './paths'

export default function styles () {

  const plugins = [
    precss(),
    postcssInstagram(),
    postcssAnimation(),
    postcssClean()
  ]

  return gulp.src(path.postcss.src)
          .pipe(postcss(plugins))
          .pipe(plumber())
          .pipe(gulp.dest('_site/assets/css/'))
          .pipe(browserSync.reload({
            stream: true
          }))
          .pipe(gulp.dest(path.postcss.dest))
}
