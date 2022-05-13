const path = require('path')
const HTMLWebpackPLugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'layblu.bundle.js',
        assetModuleFilename: 'assets/[hash][ext]'
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']

            },
            {  
                test: /\.(jpe?g|png|svg|webp|ico)$/i,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        new HTMLWebpackPLugin({
            template: 'src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: 'layblu.bundle.css'
        })
    ]

}