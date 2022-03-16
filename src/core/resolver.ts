/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 解释器
 */
import { 
  ImageElementInterface, 
  InterfaceResolver, 
  InterfaceConfig,
} from '../types'
import defaultConfig from '../default'
import scan from './scan'
import imageCollection from './picture/imageCollection'

class Resolver {

  config: InterfaceConfig

  constructor() {
    this.config = { ...defaultConfig }
    this.init()
  }

  private init() {
  }
  private scan(config: InterfaceConfig) {
    const { imageElement  } = imageCollection()
    scan(imageElement, config)
  }
  // 无序加载
  Disorder() {
    this.scan(this.config)
  }
  // 有序加载
  Ordered() {
    this.scan(this.config)
  }

}
export default Resolver
