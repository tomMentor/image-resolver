/*
 * @Author: Tom
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