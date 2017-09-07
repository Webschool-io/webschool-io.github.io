
import BrowserSync from 'browser-sync'

export default function browserSync () {
  BrowserSync({
    open: false,
    server: {
      baseDir: '_site'
    }
  })
}
