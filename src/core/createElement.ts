/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: CreateElement
 */
export default function createElement(imageElement: HTMLImageElement) {
  

  // Create new <figure> Element
  const Figure: HTMLElement = document.createElement('figure')

  const { width, height } = imageElement

  Figure.style.margin = '0'
  Figure.style.padding = '0'
  Figure.style.marginBlockStart = '0'
  Figure.style.marginBlockEnd = '0'
  Figure.style.marginInlineStart = '0'
  Figure.style.marginInlineEnd = '0'
  Figure.style.width = `${width}px`
  Figure.style.height = `${height}px`
  Figure.classList.add('Figure')

  // Create new <Img> Element
  const Imge: HTMLImageElement = document.createElement('img')
  Imge.src =  imageElement.src
  Imge.style.width = '100%'
  Imge.style.height = '100%'
  Imge.classList.add('Imge')
  Figure.appendChild(Imge)
  
  const parentNode = imageElement.parentNode
  if (parentNode) {
    parentNode.insertBefore(Figure, imageElement)
  } else {
    document.body.insertBefore(Figure, imageElement)
  }
  
  imageElement.remove()

}