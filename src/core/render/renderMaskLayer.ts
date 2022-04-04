/*
 * @Author: Tom
 * @Date: 2022-03-18 11:54:05
 * @LastEditors: Please set LastEditors
 * @Description: Create Mask layer
 */
import { detectiontype } from '../../helpers/util'
import { ElementInterface, ElementType } from '../../types'
import render from './index'
export async function renderMaskLayer(param: any) {
  // callback: Function
  const maskLayer: ElementInterface = {
    type: 'div',
    props: {
      style: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0, 0, 0, 0.7)'
      }
    }
    }

    return render(maskLayer, param.element || document.body)
}