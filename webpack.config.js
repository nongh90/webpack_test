const path = require('path');

module.exports = {
    mode: 'development',
    // devtool: 'eval-source-map',
    entry: path.join(__dirname ,'app/main.js'),
    output: {
        path: path.join(__dirname , 'public'),
        filename: 'bundle.js'
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
    }
}