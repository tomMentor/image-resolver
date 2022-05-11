/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Create Figure
 */

import { removeAssignCharacter } from '../helpers/regularExpression'
import { objdctPropertyAllocation } from '../helpers/util'
export default function createFigure(imageElement: HTMLImageElement): Promise<HTMLElement> {

  // Create new <figure> Element
  const Figure: HTMLElement = document.createElement('figure')

  let width = imageElement.width || imageElement.dataset.width
  let height = imageElement.height || imageElement.dataset.height
  const [ w, h] = removeAssignCharacter([width, height], 'px')
  const styleColl = {
    
    margin: '0',
    padding: '0',
    marginBlockStart: '0',
    marginBlockEnd: '0',
    marginInlineStart: '0',
    marginInlineEnd: '0',
    width: `${w}px`,
    height: `${ h || w }px`,
    background: `#eee`,
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.3s',
    opacity: '0'
    
  }

  return new Promise((reslove) => {

      objdctPropertyAllocation(Figure, 'style', styleColl)
      Figure.classList.add('figure')
      
      const parentNode = imageElement.parentNode as HTMLImageElement

      if (parentNode) {

        parentNode.insertBefore(Figure, imageElement)
        reslove(Figure)

      } else {

        document.body.insertBefore(Figure, imageElement)
        reslove(Figure)

      }
  })
  
}