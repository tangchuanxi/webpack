module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件,文件入口
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方，打包后文件存放的位置
      filename: "bundle.js"//打包后输出文件的文件名， 打包后的文件名   __dirname  是nodejs 中的全局变量  指向当前脚本所在的目录
    },

    devServer: {
        contentBase: "./public",// 首页的地址
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 8081 //端口
    } 
}
