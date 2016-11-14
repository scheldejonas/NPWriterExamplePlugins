/*
|--------------------------------------------------------------------------
| Development config file
|--------------------------------------------------------------------------
|
| This is you webpack development config.
| Please leave it as it is.
|
*/

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

console.log("\n ----------------------------")
console.log(" Plugin development build ")
console.log(" ----------------------------\n")

module.exports = {
    entry: {
        'open-modal': './examples/open-modal',
        'insertnode': './examples/insertnode',
        'youtubeembed': './examples/se.infomaker.youtubeembed',
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].build.js"
    },
    devServer: {
      historyApiFallback: true,
      inline: true,
      compress: false,
      port: 5002
    },
    devtool: 'source-map',
    externals: {
        writer: 'writer',
        substance: 'substance'
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    module: {
        loaders: [
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
          },
          {
              test: /\.jsx?$/,
              exclude: /(node_modules)/,
              loaders: [
                  'babel?presets[]=stage-0,presets[]=es2015'
              ]
          }
        ]
    },
    cssLoader: {
        // True enables local scoped css
        modules: false,
        // Which loaders should be applied to @imported resources (How many after the css loader)
        importLoaders: 1,
        sourceMap: true
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
    ]
};
