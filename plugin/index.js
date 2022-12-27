/*
 * @Description:
 * @Author: chuanxi.tang
 * @Date: 2022-12-27 14:52:00
 * @LastEditors: chuanxi.tang
 * @LastEditTime: 2022-12-27 16:25:38
 */

// webpack 插件 文件输出修改
class WebpackRun {
  constructor() {}
  apply(complier) {
    complier.hooks.emit.tapAsync("my webpack run plugin", (compilation, cb) => {
      console.log("webpack build start ")
      //   获取所有的输出文件
      const assets = compilation.assets
      //   修改单独已知的某个文件

      let indexHtml = assets["index.html"]
      let indexHtmlContent = indexHtml.source()
      indexHtmlContent = "/*这是我通过webpack plugin 插八的一行代码*/\n" + indexHtmlContent
      //   重写 source 和 size方法
      compilation.assets["index.html"] = {
        source: function () {
          return indexHtmlContent
        },
        size: function () {
          return indexHtmlContent.length
        }
      }
      //   必须调用cb才会执行打包过程
      cb()
    })
  }
}
