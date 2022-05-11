/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 解释器
 */
import { InterfaceResolver, InterfaceConfig } from '../types/index'
import { defaultConfig } from '../default'
import { imageCollection } from '../helpers/image'
import load from './load'

class Resolver implements InterfaceResolver {

  imageElement: Array<HTMLImageElement>
  config: InterfaceConfig

  constructor() {

    this.config = defaultConfig
    this.imageElement = imageCollection()
  }

  public load() {

    load(this.imageElement, this.config)

  }
  public lazyload() {
    
  }

}
export default Resolver
