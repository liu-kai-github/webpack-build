const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
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
            // {
            //     test: /\.xml$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 outputPath: './static/',
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Production',
        }),
    ],
};