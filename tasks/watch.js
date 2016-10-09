
import gulp from 'gulp'

// Paths
import path from './paths'

export default function watch () {
  gulp.watch(path.postcss.src, ['styles'])
  gulp.watch(path.js.src, ['js'])
  gulp.watch(path.images.src, ['images'])
  gulp.watch([
    path.watch.index,
    path.watch.includes,
    path.watch.layouts,
    path.watch.posts
  ], ['jekyll:build', 'jekyll:reload'])
}
