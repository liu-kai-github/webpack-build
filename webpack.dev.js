const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // root: '.',
                                // import: false,
                                // modules: true,
                                // localIdentName: '[path][name]__[local]--[hash:base64:5]',
                                // minimize: true,
                                sourceMap: true,
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
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
        new ExtractTextPlugin({
            // filename:  (getPath) => {
            //     return getPath('css/[name].css').replace('css/js', 'css');
            // },
            filename: 'style.[contenthash].css',
            allChunks: true
        }),
    ],
});