/*
 * @Author: Tom
 * @Date: 2022-05-06 11:24:35
 * @LastEditors: Please set LastEditors
 * @Description: 正则
 */
type character = string | number | undefined
export function removeAssignCharacter(rest: Array<character>, value: string) {
  return rest.map((item: character) => {
    const type = typeof item
    const target = `${item}`
    var regExp = new RegExp(value, 'g')
    const product = target.replace(regExp, '')
    const text = type === 'number' ? Number(product) : product
    return item ? text : item
  })
}