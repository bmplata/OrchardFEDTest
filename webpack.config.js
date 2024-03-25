const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle filename
        publicPath: '/', // Public path for assets served by webpack-dev-server
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Apply CSS loader for .css files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets', // Output path for images in the dist directory
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // HTML template file
            filename: 'index.html', // Output HTML filename
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        })
        
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve files from the dist directory
        },
        compress: true, // Enable gzip compression
        port: 1900, // Port for webpack-dev-server
        open: true, // Automatically open the default browser
    },
};
