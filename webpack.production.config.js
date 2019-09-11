const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'null',
    entry: path.join(__dirname ,'app/main.js'),
    output: {
        path: path.join(__dirname , 'public'),
        filename: 'bundle-[hash].js'
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.tmp.html')
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('style.css')
    ]
}