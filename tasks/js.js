
// Modules
import gulp from 'gulp'
import browserSync from 'browser-sync'
import plumber from 'gulp-plumber'
import sourcemaps from 'gulp-sourcemaps'

import babel from 'gulp-babel'
import rename from 'gulp-rename'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

// Paths
import path from './paths'

export default function js () {
  return gulp.src(path.js.src)
            .pipe(concat('main.js'))
            .pipe(babel({
              presets: ['es2015']
            }))
            .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(plumber())
            .pipe(rename({
              suffix: '.min'
            }))
            .pipe(gulp.dest('_site/assets/js/'))
            .pipe(browserSync.reload({
              stream: true
            }))
            .pipe(gulp.dest(path.js.dest))
}
