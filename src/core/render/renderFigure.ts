/*
 * @Author: Tom
 * @Description: 
 */

import { ElementInterface } from '../../types'
import render from './index'
export default function renderFigure<T>(param: any): Promise<T> | void {
  const { callback } = param
  const figure: ElementInterface = {
    type: 'figure',
    render: 'insertBefore',
    props: {
      style: {
        marginBlockStart: '0',
        marginBlockEnd: '0',
        marginInlineStart: '0',
        marginInlineEnd: '0',
        width: `${param.width}px`,
        height: `${param.height}px`,
        background: '#e1e1e1'
      }
    }
    }
  if (callback && typeof callback === 'function') {

    render(figure, param.el, (target: any) => callback(target))

  } else {

    return new Promise((reslove) => {

      render(figure, param.el, (target: any) => {
   
       reslove(target)
   
      })
   
     })
  }
  
  
}