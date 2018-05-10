const webpack = require('webpack');
const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'app');

const config = {
    entry: APP_DIR + '/index.jsx',
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        },
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin([
            BUILD_DIR + '/**/*.*'
        ],
        {
            root: __dirname
        }),
        new HtmlWebpackPlugin({
            inject: "body",
            template: './app/index.hbs',
            title: "Dafydd Thomas - Web Developer",
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [require('autoprefixer')({
                                    browsers: ['last 2 versions', '> 1%']
                                })];
                            }
                        }
                    },
                    'sass-loader?outputStyle=expanded' +
                    path.resolve(APP_DIR)
                ]
            },
        ]
    }
};

module.exports = config;