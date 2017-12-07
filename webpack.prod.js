const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {
        vendor: [
            'lodash',
        ],
    },
    plugins: [
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
        // new webpack.SourceMapDevToolPlugin({
        //     filename: '[name].js.map',
        //     exclude: ['vendor.[chunkhash].js']
        // }),
    ],
    output: {
        publicPath: 'http://localhost:8088',
        filename: 'static/js/[name].[chunkhash].js',
        chunkFilename: 'static/js/[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: 'http://cdn.example.com/assets/',
    },
});