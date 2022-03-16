/*
 * @Author: Tom
 * @Date: 2022-01-21 11:35:46
 * @LastEditors: Please set LastEditors
 * @Description: 预加载
 */
import { ImageElementData, ImgElementData, ImagesReturn, InterfacePrestran } from '../types'
import { picPercent } from '../helpers/arithmetic'
import { Images } from './index'

// Promise<UsePrestrainReturn> 
export default function usePrestrain(source: ImageElementData[], callback?: Function){

  // return new Promise((reslove, reject) => {

    // Images total
    let imgCount: number = source.length

    // Current render images count
    let currentImgCount = 1

    source.map(async (item: ImageElementData) => {

    const images = await Images(item.dataSrc)
    if (images.status) {
      currentImgCount++
    } else {
      currentImgCount--
      imgCount--
    }
    const schedule = picPercent(currentImgCount, imgCount)
    callback && callback(schedule, images, item )

    })

    
  // })

}