/*
 * @Author: Tom
 * @Description: Image Filter
 */

import { ImageElementData } from '../../types'
export function findImageDataSrc(imageElement: HTMLImageElement[]): ImageElementData[]  {
  return imageElement.map((item: HTMLImageElement): ImageElementData => {
    const dataSrc = item.dataset.src
    return { imageElement: item, dataSrc: dataSrc || '' }
  })
}
