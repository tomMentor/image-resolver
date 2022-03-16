/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { rejects } from 'assert'
import { ImgElementData, ImagesReturn } from '../../types'


// export default function Images(dataSrc: string, optins?: ImagesReturn ): void {

//   const Img  = new Image()
//   Img.src = dataSrc
//   const ImgItemData: ImgElementData = { imageElement: Img, width: Img.width, height: Img.height }

//   Img.onload = () => { optins?.success && optins?.success(ImgItemData) }
//   Img.onerror = () => { optins?.error && optins?.error(ImgItemData) }

// }

export default function Images(dataSrc: string): Promise<ImgElementData> {

  const Img  = new Image()
  Img.src = dataSrc

  const ImgItemData: ImgElementData = { 
    imageElement: Img, 
    width: Img.width, 
    height: Img.height, 
    status: false 
  }
  
  return new Promise((reslove, reject) => {
    
    Img.onload = () => { reslove({...ImgItemData, status: true }) }
    Img.onerror = () => { reject({ ...ImgItemData, status: false }) }
    
  })
}
class Images_ {

  Img: HTMLImageElement
  ImgItemData: ImgElementData | Object
  constructor(dataSrc: string) {

    this.Img  = new Image()
    this.ImgItemData = {}
    this.init(dataSrc)

  }

  init(dataSrc: string){

    const img = this.Img
    this.Img.src = dataSrc
    const ImgItemData = { imageElement: img, width: img.width, height: img.height }
    this.ImgItemData = ImgItemData

  }  
  success(fn?: Function) {

    this.Img.onload = () => {

      fn && fn(this.ImgItemData)

    }
  }
  error(fn?: Function) {

    this.Img.onerror = () => { 

      fn && fn(this.ImgItemData)
      
    }

  }
}

// export default Images