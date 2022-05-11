/*
 * @Author: Tom
 * @Date: 2022-05-08 16:55:24
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
export interface ImagesReturn {
  status: 'start' | 'loading' | 'success' | 'error'
  img: HTMLImageElement
}


export interface ImgCollInterFace {
  img: HTMLImageElement
  figure: HTMLElement
}