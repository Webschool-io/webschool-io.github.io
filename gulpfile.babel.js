
import gulp from 'gulp'

// Paths
import path from './tasks/paths'

// Tasks
import browserSync from './tasks/browser-sync'
import jekyllBuild from './tasks/jekyll-build'
import jekyllReload from './tasks/jekyll-reload'
import jekyllAdmin from './tasks/jekyll-admin'
import watch from './tasks/watch'
import watchPosts from './tasks/watch-posts'
import postcss from './tasks/postcss'
import images from './tasks/images'
import js from './tasks/js'

// Style
gulp.task('styles', () => postcss())

// Image
gulp.task('images', () => images())

// Javascript
gulp.task('js', () => js())

// Browser sync
gulp.task('server', () => browserSync())

// Jekyll reload
gulp.task('jekyll:build', () => jekyllBuild())
gulp.task('jekyll:reload', () => jekyllReload())
gulp.task('jekyll:admin', ['watch:posts'], () => jekyllAdmin())

// Watch
gulp.task('watch', () => watch())
gulp.task('watch:posts', () => watchPosts())

// Default task
gulp.task('default', ['js', 'styles', 'images', 'jekyll:build', 'server', 'watch'])
