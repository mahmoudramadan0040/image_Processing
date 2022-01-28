import express, { query, response } from 'express'
import File from '../../File_ImagePro/File_images_read'
import Save from '../../File_ImagePro/Save_Thumb'
import Valid from '../../File_ImagePro/Valid'
const img = express.Router()

img.get('/', async (request: express.Request, responce: express.Response) => {
  let check = new Valid()
  await check.makeThumb_folder()
  const validation = await check.url_collection(request.query)
  if (validation != null) {
    responce.send(validation)
    return
  }

  let dir = new File()
  let save_img = new Save()
  const Cash_img = await check.is_found_Thumb(request.query)

  if (Cash_img) {
    responce.sendFile(await check.cach_img(request.query))
    return
  }
  try {
    await save_img.Save_Thumb(request.query)
  } catch {}

  let image_Path = await dir.Get_Image_Url(request.query)
  if (image_Path) {
    responce.sendFile(image_Path)
  } else {
    responce.send('please input valid name of image')
  }
})

export default img
