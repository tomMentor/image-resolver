/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 */

export interface InterfaceResolver {
  config: InterfaceConfig
  imageElement: HTMLImageElement[]
  lazyload(): void
  load(): void
}

export interface InterfaceConfig {
  orderly: boolean
}
