/*
 * @Author: Tom
 * @Date: 2022-03-28 14:40:18
 * @LastEditors: Please set LastEditors
 * @Description: 全屏
 */
import { InterfaceConfig, InterfaceImageThumbnail, ElementAttribute } from '../../types'
import { disposeThumbnail, imageSizeAdapter } from '../../helpers/util'
import createNullDiv from './createNullDiv'
import createMaskLayer from './createMaskLayer'
import renderImags from '../../core/render/renderImage'
class Fullscreen {
  
  visible: boolean

  thumbnail: InterfaceImageThumbnail[]

  maskEl: HTMLElement | null

  nullDiv: HTMLElement | null

  currentImage: any

  constructor(imageElement: HTMLImageElement[], config: InterfaceConfig) {

    const thumbnailData: InterfaceImageThumbnail[] = disposeThumbnail(imageElement)

    this.visible = false

    this.thumbnail = thumbnailData

    this.maskEl = null

    this.nullDiv = null

    this.currentImage = null

    this.eventDrive(thumbnailData)
  }

  eventDrive(imageCollection: InterfaceImageThumbnail[]) {
    imageCollection.map((thumbnail: InterfaceImageThumbnail) => {
      thumbnail.element.onclick = () => {
        this.create(thumbnail)
      }
    })
  }

  async create(thumbnail: InterfaceImageThumbnail) {

    if (this.maskEl) {
      
      this.executeEvent(this.maskEl, this.nullDiv, thumbnail)

      this.nullDiv && (this.nullDiv.style.display = 'block')
      
      this.visible = true

    } else {

      // Create Null Div Box
      const nullDiv = await createNullDiv()
      
      this.nullDiv = nullDiv
      
      // Create Mask Layer
      const mask = await createMaskLayer({ element: this.nullDiv })
      
      this.maskEl = mask

      this.visible = true

      this.executeEvent(mask, nullDiv, thumbnail)
      
    }
    
  }


  executeEvent(target: ElementAttribute, nullDiv: HTMLElement | null, cuttent: InterfaceImageThumbnail) {

    target.onclick = () => {
      
      nullDiv && (nullDiv.style.display = 'none')

      this.visible = false
    }

    this.createImage(cuttent, target)
  }

  async createImage(cuttent: InterfaceImageThumbnail, parentNode: ElementAttribute) {
    

    if (this.currentImage) {

      this.currentImage.imageElement.src = cuttent.src
      imageSizeAdapter(this.currentImage, cuttent)

    } else {
      
      const image = await renderImags(cuttent.src, {
        parentNode,
        parentNodeAttribute: {
          width: cuttent.width,
          height: cuttent.height,
        }
      })
      this.currentImage =  image
      imageSizeAdapter(image, cuttent)


    }

  }

 

}
// renderImags
export default function fullscreene(imageElement: HTMLImageElement[], config: InterfaceConfig) {
  const fullscreens = new Fullscreen(imageElement, config)
  return fullscreens
}


