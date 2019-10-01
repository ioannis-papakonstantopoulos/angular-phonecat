const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const webpack = require('webpack');

// const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
    entry: {
        app: "./app/main.ts",
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' }            
        ]
    },
    
    plugins: [
        new CopyWebpackPlugin([
            { from: __dirname +'/app/public', to: 'public'}
        ]),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.html',
            output: __dirname + '/dist',
            inject: 'head'
        }),
        // new ScriptExtPlugin({
            // defaultAttribute: 'defer'
        // }),
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: './app/app.module#AppModule',
            sourceMap: true
        })
        // new CleanWebpackPlugin(),

        // Copy assets from the public folder
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        
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