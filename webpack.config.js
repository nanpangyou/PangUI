const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: "./lib/index.tsx"
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/lib'),
        library: 'PangUI',
        libraryTarget: 'umd'
    },
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'ts-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PangUI',
            filename: 'assets/index.html'
        })
    ],
    devServer: {
        index: './assets/index.html',
    },
}