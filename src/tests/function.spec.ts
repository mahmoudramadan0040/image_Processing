import { promises as fs } from 'fs'
import path from 'path'
import Valid from '../File_ImagePro/Valid'
import Save from '../File_ImagePro/Save_Thumb'

describe('Test image function with sharp ', (): void => {
  it('filename image  exists ', async (): Promise<void> => {
    const valid = new Valid()
    const err = await valid.url_collection({
      filename: 'fjord',
      width: '300',
      height: '300',
    })
    console.log(err)
    expect(err).toBeNull()
  })
  it('resize image is working', async (): Promise<void> => {
    const img = new Save()
    let err: boolean
    await img.Save_Thumb({ filename: 'fjord', width: '250', height: '250' })
    try {
      const path_thumb = path.resolve(
        __dirname,
        '../../assets/Thumb_Images/fjord_250__250_Thumb_image.jpg'
      )
      await fs.access(path_thumb)
      err = true
    } catch {
      err = false
    }

    expect(err).toBeTrue()
  })
})
