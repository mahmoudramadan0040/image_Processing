import File from './File_images_read'
import image_pro from './image_pro'
import path from 'path'

type process = {
  filename?: string
  width?: string
  height?: string
}
export default class Save {
  src?: string
  dist?: string
  public async Save_Thumb(save: process): Promise<null | string> {
    this.src = path.resolve(
      __dirname,
      '../../assets/images/' + `${save.filename}.jpg`
    )
    this.dist = path.resolve(
      __dirname,
      '../../assets/Thumb_Images/' +
        `${save.filename}_${save.width}__${save.height}_Thumb_image.jpg`
    )
    let width = parseInt(save.width as string)
    let height = parseInt(save.height as string)
    let process = new image_pro()
    let result = process.processing(this.src, this.dist, width, height)
    return result
  }
}
