/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

import { ImagesReturn } from '../types/core'
interface Callback {
  start(param: ImagesReturn): void
}

export default function Images(target: HTMLElement, parentNode: HTMLElement, callback?: Callback): Promise<ImagesReturn> {

  const imgTarget = target as HTMLImageElement

  const Img: HTMLImageElement = new Image()
        Img.src = target.dataset.src as string

        imgTarget.remove()

  return new Promise((reslove, reject) => {

    if (callback && callback.start) callback.start({
      status: 'start',
      img: Img
    })

    Img.onload = () => {
      // Img.width = imgTarget.width
      reslove({ status: 'success', img: Img })
      parentNode.style.opacity = '1'
      parentNode.appendChild(Img)
    }

    Img.onerror = (error) => {
      reject({ status: 'error', img: Img })
      throw new Error(`Image to load error:${Img.src}`);

    }
    
  })

}