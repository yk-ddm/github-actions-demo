//入口entry（要打包的文件路径）和出口output（打包好的文件路径）
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'//指定输出的文件的名称
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
        // new cleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=5000'},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}