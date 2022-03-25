/*
 * @Author: your name
 * @Date: 2022-01-18 15:45:54
 * @LastEditTime: 2022-03-18 17:46:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /image-resolver/src/helpers/util.ts
 */

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

