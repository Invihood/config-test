let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/js/index.tsx',
    output: {
        path: path.resolve(__dirname, '../test'),
        filename: 'main.js',    
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: '/node-modules/'
            }
        ]
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, '../test/'),
        compress: true,
        // live-reload: true,
        port: 8080,
        host: '0.0.0.0'
    },

    plugins: [
        new ExtractTextPlugin("main.css")
    ]
};

module.exports = conf;