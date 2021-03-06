const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfigBasic = require('./webpack.config.base')
module.exports = Object.assign({}, webpackConfigBasic, {
    mode: 'development',
    entry: {
        index: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PangUI',
            template: 'assets/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        index: './index.html',
    },
})