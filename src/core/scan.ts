/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 扫描
 */

import { findImageDataSrc } from './picture/imageFilter'
import { 
  ElementInterface, 
  ImageElementData, 
  ImgElementData,
  InterfaceConfig,
  InterfacePrestran
} from '../types'
import render from './render'
import renderFigure from './render/renderFigure'
import { Images, usePrestrain } from './index'
// : HTMLImageElement[]
export default async function scan(imageElement: HTMLImageElement[], config: InterfaceConfig): Promise<void> {
  
  const imageCol = findImageDataSrc(imageElement)
  // usePrestrain(imageCol, async (schedule: number, images: ImgElementData, imgEls: ImageElementData) => {
  //   let imgEl = imgEls.imageElement
  //   // images.imageElement.style.position = 'absolute'
  //   images.imageElement.style.width = `${imgEl.width}px`
  //   images.imageElement.style.height = `${imgEl.height}px`
    
  //   const figure: any = await renderFigure({
  //         width: imgEl.width,
  //         height: imgEl.height
  //   }, imgEl)
  //   figure.appendChild(images.imageElement)
  //   figure && imgEl.parentNode?.removeChild(imgEl)


   
  // })

  imageCol.map((param: ImageElementData) => {
    const defaultImgEl = param.imageElement
    renderFigure({
      width: defaultImgEl.width,
      height: defaultImgEl.height,
      el: defaultImgEl,
      callback: (target: any) => {
        console.log(target)
      }
    })

  })


  
  // return imageCol.map((param: ImageElementData) => {

  //   param.imageElement.style.position = 'absolute'

  //   // 渲染 Figure
  //   renderFigure({

  //     width: param.imageElement.width,
  //     height: param.imageElement.height

  //   }, param.imageElement)
  //   .then((target: any) => Images(param.dataSrc)
  //   .then((imgItem: ImgElementData) => {

  //     target.style.height = `${imgItem.height}px`
  //     target.appendChild(imgItem.imageElement)
      
  //     // 清空旧的节点
  //     target && param.imageElement.parentNode?.removeChild(param.imageElement)
      
  //   }))
   
  //   return param.imageElement
    
  // }) 
}
