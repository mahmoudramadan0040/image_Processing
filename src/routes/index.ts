import express, { response } from 'express'
import img from './api/Img_Route'

const routes = express.Router()

routes.get('/', (request: express.Request, recponce: express.Response) => {
  recponce.send('hello main routes')
})

routes.use('/images', img)
export default routes
