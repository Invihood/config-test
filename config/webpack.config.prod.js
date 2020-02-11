let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
// let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'main.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // },


            {
              test: /\.(sa|sc|c)ss$/,
              use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
              })
            },


            // {
            //   test: /\.(sa|sc|c)ss$/,
            //   use: [
            //     MiniCssExtractPlugin.loader,
            //     {
            //       loader: "style-loader" // creates style nodes from JS strings
            //     },
            //     {
            //       loader: "css-loader" // translates CSS into CommonJS
            //     },
            //     {
            //       loader: "sass-loader" // compiles Sass to CSS
            //     }
            //   ]
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css")
        // new MiniCssExtractPlugin("main.css")
      ]
    
};

module.exports = conf;