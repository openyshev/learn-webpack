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
            // {
            //     test: /\.png$/, use: 'url-loader'
            // },
        ],
    },
    mode: 'development'
};