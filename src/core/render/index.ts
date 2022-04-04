/*
 * @Author: Tom
 * @Date: 2022-01-18 15:03:15
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

import { ElementInterface, ElementAttribute } from '../../types'
import { objectEventDriven, detectiontype } from '../../helpers/util'

export default function render(target: ElementInterface, formerImage: HTMLImageElement | HTMLElement, callback?: Function): Promise<ElementAttribute> {

  const tag = document.createElement(target.type)
  const targetStyle = target.props?.style

  // 对象事件驱动
  objectEventDriven(targetStyle, (data: any) => {
    tag.style[data.key] = data.value
  })

  if (target.render === 'insertBefore') {
    formerImage.parentNode?.insertBefore(tag, formerImage)
  } else {
    formerImage.appendChild(tag)
  }

  if (callback && detectiontype(callback).fn) {

    callback(tag)

  } else {

    // ....

  }

  return new Promise((relove) => {
    relove(tag)
  })

}