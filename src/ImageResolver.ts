/*
 * @Author: Tom
 * @Date: 2022-01-20 16:36:38
 * @LastEditors: 
 * @Description: 
 */

import Resolver from './core/resolver'
import { InterfaceResolver } from './types'
function createImageResolver(): InterfaceResolver {
  const resolver = new Resolver()
  return resolver
}
const ImageResolver = createImageResolver()

export default ImageResolver
