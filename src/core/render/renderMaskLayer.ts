/*
 * @Author: Tom
 * @Date: 2022-03-18 11:54:05
 * @LastEditors: Please set LastEditors
 * @Description: Create Mask layer
 */
import { detectiontype } from '../../helpers/util'
import { ElementInterface, ElementType } from '../../types'
import render from './index'
export function renderMaskLayer(param: any) {
  // callback: Function
  const maskLayer: ElementInterface = {
    type: 'div',
    props: {
      style: {
        position: 'fixed'
        // marginBlockStart: '0',
        // marginBlockEnd: '0',
        // marginInlineStart: '0',
        // marginInlineEnd: '0',
        // width: `${param.width}px`,
        // height: `${param.height}px`,
        // background: '#e1e1e1'
      }
    }
    }
    render(maskLayer, param.element || document.body, (target: ElementType) => {
      if (detectiontype(param.callback).fn) {
        param.callback(target)
      }
    })
}