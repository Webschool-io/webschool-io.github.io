
import { spawn } from 'child_process'

export default function jekyllBuild (done) {
  return spawn('bundle', ['exec', 'jekyll', 'build'], { stdio: 'inherit' })
              .on('close', () => done)
}
