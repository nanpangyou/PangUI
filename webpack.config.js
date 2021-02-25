const path = require('path')
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
    }

}