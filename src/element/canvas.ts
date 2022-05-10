/*
 * @Author: Tom
 * @Date: 2022-04-04 15:38:18
 * @LastEditors: Please set LastEditors
 * @Description: Canvas Element
 */


interface CanvasObj {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  devicePixe: number
}

export default function createCanvas(width: number, height: number): CanvasObj {

  const canvas: HTMLCanvasElement = document.createElement('canvas')
  const context: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
  const devicePixe = 6

  canvas.width = width * devicePixe
  canvas.height = height * devicePixe

  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`

  return {
    canvas,
    context,
    devicePixe
  }
}



