
// Modules
import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import browserSync from 'browser-sync'

// Paths
import path from './paths'

export default function images () {
  return gulp.src(path.images.src)
          .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
          }))
          .pipe(gulp.dest('_site/assets/img/'))
          .pipe(browserSync.reload({
            stream: true
          }))
          .pipe(gulp.dest(path.images.dest))
}
