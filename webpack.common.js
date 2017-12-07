const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader'],
                    publicPath: 'http://localhost:8088',
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'http://localhost:8088',
                            outputPath: '/static/img/',
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '/static/woff/',
                        },
                    },
                ],
            },
            {
                test: /\.xml$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './static/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Production',
        }),
        new ExtractTextPlugin({
            // filename:  (getPath) => {
            //     return getPath('css/[name].css').replace('css/js', 'css');
            // },
            filename: 'static/css/app.css',
            allChunks: true
        }),
    ],
};