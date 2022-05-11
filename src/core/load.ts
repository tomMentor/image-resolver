/*
 * @Author: Tom
 * @Date: 2022-05-11 10:39:43
 * @LastEditors: Please set LastEditors
 * @Description: Load
 */
import { createFigure } from '../element'
import { InterfaceConfig } from '../types/index'
import { ImgCollInterFace } from '../types/core'
import orderlyLoad from './orderlyLoad'
import useImage from './picture'

export default async function load(coll: Array<HTMLImageElement>, config: InterfaceConfig) {
  
  const { orderly } = config

  const disposeItemImg = (imgColl: Array<HTMLImageElement>) => {
    return imgColl.map(async (img: HTMLImageElement) => {
      const figure = await createFigure(img)
      await useImage(img, figure)
    })
  }

  const disposeOrderly = async (imgColl: Array<HTMLImageElement>) => {
    
    const promise = imgColl.map(async (img: HTMLImageElement): Promise<ImgCollInterFace> => {
      const figure = await createFigure(img)
      return ({ img, figure })
    })
    
    const data: Array<ImgCollInterFace> = await Promise.all(promise)
    orderlyLoad(data)()

  }

  if (orderly) {
    // Orderly load
    disposeOrderly(coll)
    
  } else {
    disposeItemImg(coll)
  }
  
}