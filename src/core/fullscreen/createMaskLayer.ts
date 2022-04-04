/*
 * @Author: Tom
 * @Date: 2022-03-28 15:21:07
 * @LastEditors: Please set LastEditors
 * @Description: Create mask layer
 */
import { ElementAttribute, ElementInterface } from '../../types'
import render from '../render'
export default function createMaskLayer(param: any) {

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

