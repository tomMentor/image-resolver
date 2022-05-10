/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 解释器
 */

import { ImagesReturn } from '../types/index'
import { imageCollection } from '../helpers/image'
import { createFigure, createProgressBar } from '../element'
import useImage from './picture'

class Resolver {
  bb: number
  constructor() {
    this.bb = 0
  }

  public load() {
    const collImg = imageCollection()
    this.collectionDispose(collImg)

  }

  collectionDispose(coll: Array<HTMLImageElement>) {
    return coll.map((img: HTMLImageElement) => {
      this.disposeItemImg(img)
    })
  }

 async disposeItemImg(img: HTMLImageElement) {
   
  const figure = await createFigure(img)

  useImage(img, figure)
 
  }

  

}
export default Resolver
