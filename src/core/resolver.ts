/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 解释器
 */
import { 
  ImageElementInterface, 
  InterfaceConfig,
  ElementType,
  ElementAttribute,
  InterfaceImageThumbnail
} from '../types'
import { InterfaceCurrentPreviewImage } from '../types/fullscreen'
import defaultConfig from '../default'
import scan from './scan'
import imageCollection from './picture/imageCollection'
import render from '../core/render'
import { renderMaskLayer } from '../core/render/renderMaskLayer'
import renderImags from '../core/render/renderImage'
import fullscreene from './fullscreen' 
class Resolver {

  config: InterfaceConfig
  imageElement: HTMLImageElement[]
  maskCreateStatus: boolean
  maskBox: ElementAttribute | null
  currentPreviewImage: InterfaceCurrentPreviewImage
  currentImageIndex: number
  thumbnailCollection: InterfaceImageThumbnail[]

  constructor() {

    this.config = { ...defaultConfig }
    this.imageElement = []
    this.maskCreateStatus = false
    this.maskBox = null
    this.currentPreviewImage = { index: 0, src: undefined }
    this.currentImageIndex = 0
    this.thumbnailCollection = []

    this.searchingImg()
    
  }

  // 检索该区域的所有图片
  private searchingImg() {
    const { imageElement  } = imageCollection()
    this.imageElement = imageElement

  }

  private scan(config: InterfaceConfig) {
    const { imageElement  } = imageCollection()
    scan(imageElement, config)
  }
  // 无序加载
  Disorder() {
    // this.scan(this.config)
    console.log(this.imageElement)
    console.log(this.config)
  }
  // 有序加载
  Ordered() {
    this.scan(this.config)
  }
  load() {
    const config = this.config
    config.fullscreen && fullscreene(this.imageElement, this.config)
    // const { fullscreen } = this.config
    // if (fullscreen) {
      
      // Create Mask Layer
      // this.createMaskLayer()

      
      // const thumbnailInfo: InterfaceImageThumbnail[] = this.disposeImageColl(this.imageElement)
      // this.thumbnailCollection = thumbnailInfo
      // 全屏预览
      // this.Fullscreen(thumbnailInfo)

    // }
    
  }
  // 全屏预览
  Fullscreen(imageElement: InterfaceImageThumbnail[]) {
    imageElement.map((item: InterfaceImageThumbnail, i: number) => {
      const element = item.element
      element.onclick = () => {
        this.createMaskLayer(item, i)
        this.currentImageIndex = i
        this.currentPreviewImage = { index: i, src: item.src }
      }
      return item
    })
  }
  
  // Creatae Mask layer
  async createMaskLayer(img: any, i: number) {
    
    let maskLayer = null

    if (!this.maskCreateStatus) {
 

      // Create Image
      // console.log(currentImage.width, currentImage.height)
      // renderImags(currentImage.src, {
      //   parentNode: mask
      // })
      // console.log(this.currentPreviewImage)
      // const cuttentImage = await renderMaskLayer({ element: mask })
      // mask.appendChild(this.currentPreviewImage.el!)
      
      // this.maskCreateStatus = !!mask

    } else {
      // ....
      this.maskBox && (this.maskBox.style.display = 'block')
    }

    const currentImage = this.thumbnailCollection[this.currentImageIndex]
    // renderImags(currentImage.src, {
    //   parentNode: maskLayer
    // })
  }
}
export default Resolver
