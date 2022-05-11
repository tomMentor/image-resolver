/*
 * @Author: your name
 * @Date: 2022-01-18 15:45:54
 * @LastEditTime: 2022-05-11 11:04:59
 * @LastEditors: Please set LastEditors
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
    fn: oprtoc(type,'Function'),
    undefined: oprtoc(type,'Undefined'),
    obj: oprtoc(type,'Object'),
    array: oprtoc(type,'Array'),
    string: oprtoc(type,'String'),
    boolean: oprtoc(type,'Boolean'),
    number: oprtoc(type,'Number'),
  }

}

export function oprtoc(value: any, type: string) {
  return  value === `[object ${type}]`
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
