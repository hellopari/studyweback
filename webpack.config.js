const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true
    },
    plugins: [new HtmlWebpackPlugin()]
};