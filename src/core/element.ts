/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 获取 ImageElement 
 */
import { ImageElementInterface } from '../types'
export default function elementNode(): ImageElementInterface {
  const ImageElement: HTMLCollectionOf<HTMLImageElement> = window.document.images
  
  const ImageElementArray: HTMLImageElement[] = Array.prototype.slice.call(ImageElement)
  return { 
    imageElement: ImageElementArray
  }
}