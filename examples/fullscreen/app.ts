/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 
 * 第一步 检索所有图片
 */
import imageResolver from '../../src'




// 无序加载
// 有序加载
// 全屏预览

// 启动预加载
// ImageResolver.config.prestrain = true

// ImageResolver.Disorder()
// 开启全屏预览
imageResolver.config['fullscreen'] = true
imageResolver.load()
