/*
 * @Author: your name
 * @Date: 2022-01-18 15:45:54
 * @LastEditTime: 2022-05-07 14:35:24
 * @LastEditors: Please set LastEditors
 */
import { InterfaceImageThumbnail, ImgElementData } from '../types'
export function objectEventDriven<T> (targetObj: T, callback: Function) {
  for (const key in targetObj) {
    if (Object.prototype.hasOwnProperty.call(targetObj, key)) {
      callback({ key, value: targetObj[key] })
    }
  }
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function Errors(message: string) {
  try {
    throw new Error(message)
  } catch (error) {
    throw new Error(message)
  }
}

interface InterfaceDetectiontype {
  fn: boolean,
  undefined: boolean,
  obj: boolean,
  array: boolean,
  string: boolean,
  boolean: boolean,
  number: boolean,
}
export function detectiontype(obj?: any): InterfaceDetectiontype {
  
  const type = Object.prototype.toString.call(obj)
  return {
    fn: type === `[object Function]`,
    undefined: type === `[object Undefined]`,
    obj: type === `[object Object]`,
    array: type === `[object Array]`,
    string: type === `[object String]`,
    boolean: type === `[object Boolean]`,
    number: type === `[object Number]`,
  }

}

export function oprtoc(type: string) {
  return  `[object ${type}]`
}

export function disposeThumbnail(imageElement: HTMLImageElement[]): InterfaceImageThumbnail[] {
  return imageElement.map(item => {
    return {
      element: item,
      width: item.width,
      height: item.height,
      src: item.src
    }
  })
}

export function imageSizeAdapter(current: ImgElementData, thumbnail: InterfaceImageThumbnail) {
  
  if (thumbnail.width > thumbnail.height) {
    
    current.imageElement.style.width = '100%'
    current.imageElement.style.height = ''

  } else {
    
    current.imageElement.style.height = '100%'
    current.imageElement.style.width = ''

  }

  current.imageElement.style.position = 'absolute'
  current.imageElement.style.top = '50%'
  current.imageElement.style.left = '50%'
  current.imageElement.style.transform = 'translate3d(-50%, -50%, 0)'


}

/**
 * @description: 对象属性分配
 * @param {*}
 * @return {*}
 */
export function objdctPropertyAllocation<T>(El: T, to: string, resources: Object) {
  for (const key in resources) {
    if (Object.prototype.hasOwnProperty.call(resources, key)) {
      const element = resources[key]
      El[to][key] = element
    }
  }
}
