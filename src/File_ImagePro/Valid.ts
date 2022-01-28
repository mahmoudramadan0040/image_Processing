import { promises as fs } from 'fs'

import path from 'path'

interface Url {
  filename?: string
  width?: string
  height?: string
}
export default class Valid {
  async img_found(url: Url): Promise<boolean> {
    if (!url.filename) return false
    path.resolve(__dirname, '../../assets/Thumb_Images')
    try {
      let search: string[] = (
        await fs.readdir(path.resolve(__dirname, '../../assets/images'))
      ).map((image_name: string) => image_name.split('.')[0])
      if (search.includes(url.filename)) {
        return true
      }
      return false
    } catch {
      return false
    }
  }
  async checkDim_img(url: Url): Promise<boolean> {
    if (
      (url.width as number | '') < 1 ||
      Number.isNaN(url.width as number | '')
    )
      return false
    if (
      (url.height as number | '') < 1 ||
      Number.isNaN(url.height as number | '')
    )
      return false
    return true
  }
  async url_collection(url: Url): Promise<string | null> {
    const exist = await this.img_found(url)
    if (!exist) {
      return 'image not existed'
    }
    if (!url.height && !url.width) {
      return null
    }
    const checkDim = await this.checkDim_img(url)
    if (!checkDim) {
      return 'width or height may be worng'
    }
    return null
  }
  async is_found_Thumb(url: Url): Promise<boolean> {
    if (!url.filename) return false
    if (!url.height) return false
    if (!url.width) return false

    try {
      await fs.access(
        path.resolve(
          __dirname,
          '../../assets/Thumb_Images/' +
            `${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`
        )
      )
      return true
    } catch {
      return false
    }
  }
  async cach_img(url: Url): Promise<string> {
    let cashed: string = path.resolve(
      __dirname,
      '../../assets/Thumb_Images/' +
        `${url.filename}_${url.width}__${url.height}_Thumb_image.jpg`
    )
    return cashed
  }

  async makeThumb_folder(): Promise<void> {
    try {
      const folder = path.resolve(__dirname, '../../assets/Thumb_Images')
      await fs.access(folder)
    } catch {
      const folder = path.resolve(__dirname, '../../assets/Thumb_Images')
      await fs.mkdir(folder)
    }
  }
}
