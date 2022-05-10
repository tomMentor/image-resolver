/*
 * @Author: Tom
 * @Date: 2022-05-06 10:49:19
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
/**
 * @description: 图片集合
 * @param {*}
 * @return {*}
 */
export function imageCollection(): Array<HTMLImageElement> {
  return Array.prototype.slice.call(window.document.images)
}