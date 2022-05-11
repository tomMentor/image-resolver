/*
 * @Author: Tom
 * @Date: 2022-05-11 14:31:04
 * @LastEditors: Please set LastEditors
 * @Description:  Orderly Load
 */

import { ImgCollInterFace } from '../types/core'
import useImage from './picture'
let count = 0
export default function orderlyLoad(element: Array<ImgCollInterFace>) {
  const imgLength = element.length
  
  return async () => {
    const img = element[count].img
    const figure = element[count].figure
    await useImage(img, figure)

    if (count >= imgLength) {
        // Load complete

    } else {

      orderlyLoad(element)()
      
    }
    count++
  }
}