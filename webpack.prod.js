const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        vendor: [
            'lodash',
        ],
    },
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
                                minimize: true,
                                sourceMap: true,
                            }
                        }
                    ],
                    // publicPath: 'http://localhost:8088',
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // publicPath: 'http://localhost:8088',
                            outputPath: '/static/img/',
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
        }),
        new ExtractTextPlugin({
            // filename:  (getPath) => {
            //     return getPath('css/[name].css').replace('css/js', 'css');
            // },
            filename: 'static/css/style.[contenthash].css',
            allChunks: true
        }),
    ],
    output: {
        // publicPath: 'http://localhost:8088',
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[chunkhash].js',
        chunkFilename: 'static/js/[name].[chunkhash].js',
        // publicPath: 'http://cdn.example.com/assets/',
    },
});