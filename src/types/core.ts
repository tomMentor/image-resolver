/*
 * @Author: Tom
 * @Date: 2022-05-08 16:55:24
 * @LastEditors: 
 * @Description: 
 */
export interface ImagesReturn {
  status: 'start' | 'loading' | 'success' | 'error'
  img: HTMLImageElement
}