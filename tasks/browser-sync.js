
import BrowserSync from 'browser-sync'

export default function browserSync () {
  BrowserSync({
    server: {
      baseDir: '_site'
    }
  })
}
