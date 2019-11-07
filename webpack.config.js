const path = require('path');
const outputPath = path.join(__dirname, './bundles');

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
            {
                test: /\.html$/, 
                use: 'html-loader'
            },
            // {
            //     test: /\.css$/, 
            //     use: ['style-loader', 'css-loader']
            // },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    mode: 'development'
};