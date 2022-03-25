/*
 * @Author: Tom
 * @Date: 2022-01-18 15:03:15
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

import { ElementInterface } from '../../types'
import { objectEventDriven } from '../../helpers/util'
export default function render(target: ElementInterface, formerImage: HTMLImageElement | HTMLElement, callback?: Function) {
  if (formerImage) {

    const tag = document.createElement(target.type)

    const targetStyle = target.props?.style

    // 对象事件骚动
    objectEventDriven(targetStyle, (data: any) => {
      tag.style[data.key] = data.value
    })
    if (target.render === 'insertBefore') {
      
      // formerImage.parentNode 旧图片父节点元素
      // 将 tag 插入到 formerImage[ 原本位置之前 ]
      formerImage.parentNode?.insertBefore(tag, formerImage)

      callback && callback(tag)

    } else {
      // ...
      formerImage.appendChild(tag)
      callback && callback(tag)
    }
    

  } else {
    // ...

  }

}