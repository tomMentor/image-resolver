/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
export type DefaultKeyTarget = '__key__'

export type ElementType = 'figure' | 'img' | 'div'

export type ElementAttribute = HTMLImageElement | HTMLElement | HTMLDivElement

export interface ImageElementInterface {
  HTMLImageElement: HTMLCollectionOf<HTMLImageElement>,
  imageElement: HTMLImageElement[]
}

export interface ElementInterface {
  type: ElementType,
  render?: string,
  props?: {
    style?: {}
  }
}


export interface ImageElementData {
  imageElement: HTMLImageElement,
  dataSrc: string,
}

export interface ImgElementData {
  imageElement: HTMLImageElement
  width: number
  height: number
  status?: boolean
}


export interface InterfaceResolver {
  config: InterfaceConfig
  imageElement: HTMLImageElement[]
  maskCreateStatus: boolean
  Disorder(): void
  Ordered(): void
  load(): void
}

export interface InterfacePrestran extends ImageElementData {
  schedule: number,

}

export interface InterfaceConfig {
  animation: boolean
  prestrain: boolean
  [propName: string]: any
}

export interface ImagesReturn {
  success(param: ImgElementData): void,
  error?(param: ImgElementData): void
}


export interface InterfaceRenderImagsOptions {
  parentNode: HTMLElement,
  parentNodeAttribute: {
    width: number,
    height: number
  }
}

export interface InterfaceImageThumbnail {
  element: HTMLImageElement,
  src: string,
  width: number,
  height: number
}