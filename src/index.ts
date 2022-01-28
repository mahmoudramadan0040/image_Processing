import express from 'express'
import routes from './routes'

import cors from 'cors'

const app = express()

app.use(cors())

const Port = 3000

app.use('/api', routes)

app.listen(Port, () => {
  console.log('server start at http://localhost:' + Port)
})

export default app
