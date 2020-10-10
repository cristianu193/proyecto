const path = require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './src/app/index.js',
    output: {
    path: path.join(__dirname, 'dist'),
    filename:'bundle.js'
    },
devServer:{
    port: 7000
    },
plugins:[
    new HtmlWebPackPlugin({
    template: './src/index.html'
    })
]
}
