
import gulp from 'gulp'

// Paths
import path from './paths'

export default function watch () {
  gulp.watch(path.images.src, ['images'])
}
