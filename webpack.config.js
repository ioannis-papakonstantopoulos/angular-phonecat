const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    // entry: "./dist/main.js",
    entry: {
        app: "./app/main.ts",
        // index: "./index.html"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                loader: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.scss?$/,
            //     loader: [
            //         'style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ]
            // },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: './index.html'
        }),
        new CleanWebpackPlugin()
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: '[name].bundle.js',
        //     minChunks(module, count){
        //         var context = module.context;
        //         return context && context.indexOf('node_modules') >= 0;
        //     }
        // })
    ]
};