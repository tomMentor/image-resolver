/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: ImageElement Collection
 */
import { ImageElementInterface } from '../../types'
export default function imageCollection(): ImageElementInterface {

  const ImageElement: HTMLCollectionOf<HTMLImageElement> = window.document.images
  
  const ImageElementArray: HTMLImageElement[] = Array.prototype.slice.call(ImageElement)
  
  return { 
    HTMLImageElement: ImageElement,
    imageElement: ImageElementArray
  }
}