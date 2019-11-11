const path = require('path');
const outputPath = path.join(__dirname, './bundles');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const isWatch = process.env.WATCH === 'y';

module.exports = {
    entry: './app.js',
    output: {
        path: outputPath,
        filename: 'my_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.txt$/, use: 'raw-loader'
            },
            {
                test: /\.jpeg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        publicPath: './bundles'
                    }
                }
            },
            {
                test: /\.png$/, use: 'url-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.ts$/, loader: 'ts-loader' },
            // {
            //     test: /\.(js|ts)$/,
            //     exclude: /(node_modules)/,
            //     use: 'babel-loader'
            // },
            {
                test: /\.html$/, 
                use: 'html-loader'
            },
            {
                test: /\.css$/, 
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 
                    { loader: 'css-loader', options: { importLoaders: 1 } }, 
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        isProduction && new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(env)
        }),
        // new ForkTsCheckerWebpackPlugin()
    ].filter(Boolean),
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    watch: isWatch,
    mode: 'development'
};