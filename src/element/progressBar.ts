/*
 * @Author: Tom
 * @Date: 2022-05-07 14:57:56
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import createCanvas from './canvas'
interface ItemsInter {
  time: number
  status: string
}

class CreateProgressBar {

  parentNode: HTMLElement
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  animation: number
  items: ItemsInter
  devicePixe: number
  width: number
  height: number
  speed: number

  constructor(parentNode: HTMLElement) {
    const { canvas, context, devicePixe } = createCanvas(parentNode.offsetWidth, parentNode.offsetHeight)
    this.canvas = canvas
    this.context = context

    this.parentNode = parentNode
    this.animation = 0
    this.items = { time: 0, status: 'start'}
    this.width = canvas.width
    this.height = canvas.height
    this.devicePixe = devicePixe
    this.speed = 0
    this.canvasStyle()
  }
  init() {
    this.create()
    this.animation = window.requestAnimationFrame(this.activeAnimation.bind(this))
  }
  create() {
    this.parentNode.appendChild(this.canvas)
  }
  activeAnimation() {
    const { status } = this.items
    this.speed++
    this.startDraw()
    this.animation = window.requestAnimationFrame(this.activeAnimation.bind(this))

    
    if (status === 'success') {
      window.cancelAnimationFrame(this.animation)

    } else if (status === 'error') {
      
      this.clear()
      this.errorStatus()
      window.cancelAnimationFrame(this.animation)

    }
    

  }

  startDraw() {
    this.clear()
    this.drawReact()
  }
  drawReact() {

    const radian = (r: number) => r * Math.PI / 360

    this.context.save()
    this.context.beginPath()
    const r = this.width / 15 
    const { x, y } = this.centralPoint()
    this.context.lineWidth = 12
    this.context.strokeStyle = '#ccc'
    this.context.lineCap = 'round'
    this.context.translate(x, y)
    console.log(this.speed)

    this.context.rotate(this.speed)
    this.context.translate(-x, -y)
    this.context.arc(x, y, r, 0, 1.5 * Math.PI)
    this.context.stroke()
    this.context.restore()
  }

  canvasStyle() {
    this.canvas.style.position = 'absolute'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    this.canvas.style.right = '0'
  }

  errorStatus() {
    this.errorIcon()
  }
  errorIcon() {
    this.context.save()
    this.context.beginPath()
    const r = this.width / 10 
    const { x, y } = this.centralPoint()
    this.context.fillStyle = 'rgba(0, 0, 0, 0)'
    this.context.arc(x, y, r, 0, 2 * Math.PI)
    this.context.fill()
    this.context.restore()
    // this.context.clip()
    this.eye({ translateX: -(r / 2 ), size: r })
    this.eye({ translateX: (r / 2 ), size: r  })
    this.sorry({ size: r })
  }

  eye(icon: { translateX: number, size: number }) {
    // const r = icon.size / 240 * this.devicePixe
    const r = icon.size / 10
    this.context.save()
    this.context.beginPath()
    this.context.fillStyle = '#ccc'
    const { x, y } = this.centralPoint()
    this.context.translate(icon.translateX, -(icon.size / 4))
    this.context.arc(x, y, r, 0, 2 * Math.PI)
    this.context.fill()
    
    this.context.restore()
  }


  sorry(icon: { size: number }) {
    const r = this.width / 30 * this.devicePixe
    this.context.save()
    this.context.beginPath()
    this.context.strokeStyle = '#ccc'
    this.context.lineWidth = icon.size / 10
    const { x, y } = this.centralPoint()
    this.context.translate(0, r + 50)
    this.context.arc(x, y, r, 1.4 * Math.PI, 1.6 * Math.PI)
    this.context.lineCap = 'round'
    this.context.stroke()
    this.context.restore()
  }

  centralPoint(r?: number) {
    if (r) {
      return { x: (this.width / 2) - (r / 2), y: (this.height / 2) - (r / 2)}
    } else {
      return { x: (this.width / 2), y: (this.height / 2)}
    }
  }
  clear(x: number = 0, y: number = 0, w: number = this.width, h: number = this.height) {
    this.context.clearRect(x, y, w, h)
  }
}

export default  function createProgressBar(parentNode: HTMLElement) {

  const progressBar = new CreateProgressBar(parentNode)
  return progressBar
}