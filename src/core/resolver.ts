/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 解释器
 */
import { 
  ImageElementInterface, 
  InterfaceConfig,
  ElementType
} from '../types'
import defaultConfig from '../default'
import scan from './scan'
import imageCollection from './picture/imageCollection'
import render from '../core/render'
import { renderMaskLayer } from '../core/render/renderMaskLayer'
class Resolver {

  config: InterfaceConfig
  imageElement: HTMLImageElement[]
  maskCreateStatus: boolean

  constructor() {

    this.config = { ...defaultConfig }
    this.imageElement = []
    this.maskCreateStatus = false

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
    const { fullscreen } = this.config
    if (fullscreen) {

      // Create Mask Layer
      // this.createMaskLayer()

      // 全屏预览
      this.Fullscreen(this.imageElement)

    }
    
  }
  // 全屏预览
  Fullscreen(imageElement: HTMLImageElement[]): HTMLImageElement[] {
    return imageElement.map((item: HTMLImageElement, i: number) => {
      item.onclick = () => {
        console.log(i, item)
        this.createMaskLayer()
      }
      return item
    })
  }
  // Creatae Mask layer
  createMaskLayer() {
    
    if (!this.maskCreateStatus) {
      
      // 创建一个空的对象
      render({ type: 'div' }, document.body, (target: ElementType) => {
        
        renderMaskLayer({
          element: target,
          callback: (target: ElementType) => {
        
            this.maskCreateStatus = !!target
          
          }
        })
      })

      

    } else {
      // ....
    }
  }
}
export default Resolver
