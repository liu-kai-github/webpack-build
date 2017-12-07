const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // root: '.',
                            // import: false,
                            // modules: true,
                            // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            minimize: true,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        // loader: 'file-loader',
                        // options: {
                        //     outputPath: 'static/img/',
                        // },
                        loader: 'url-loader',
                        options: {
                            outputPath: 'static/img/',
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        useLocalIp: true,
        hot: true,
        // noInfo: true,
        open: true,
        port: 8080,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
});