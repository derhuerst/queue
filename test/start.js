import tap from 'tap-esm';
import Queue from '../index.js'

tap('start', (t) => {
  t.plan(4)

  const q = new Queue()
  const work = (cb) => {
    t.ok(q)
    cb()
  }

  q.addEventListener('start', (event) => {
    t.equal(event.detail.job, work)
  })

  q.push(work)

  q.start(() => {
    t.ok(q)

    q.start(() => {
      t.ok(q)
    })
  })
})
