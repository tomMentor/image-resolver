/*
 * @Author: Tom
 * @Date: 2022-03-28 15:14:23
 * @LastEditors: Please set LastEditors
 * @Description: Create null div
 */
import render from '../render'
export default async function createNullDiv() {
  return await render({ type: 'div' }, document.body)
}

