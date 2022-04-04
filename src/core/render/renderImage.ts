/*
 * @Author: Tom
 * @Date: 2022-03-25 16:02:36
 * @LastEditors: Please set LastEditors
 * @Description: Render Image
 */
import Images from '../picture/index'
import { InterfaceRenderImagsOptions } from '../../types/index'
export default async function renderImags(src: string, options: InterfaceRenderImagsOptions) {
  const images = await Images(src)
  
  console.log()
  if (options.parentNodeAttribute.width > options.parentNodeAttribute.height) {
    
    // images.imageElement.style.width = '100%'

  } else {
    
    // images.imageElement.style.height = '100%'

  }
  options.parentNode.appendChild(images.imageElement)
  return images
}



