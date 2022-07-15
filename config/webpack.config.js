const path = require('path')
const autoprefixer = require('autoprefixer')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const devConfig = require('./webpack.dev.config.js')
const proConfig = require('./webpack.pro.config.js')

const config = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
        filename: 'static/js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../build'),
        clean: true,
    },
    module: {
        rules: [
            // 使用 less
            {
                test: /\.less$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    'less-loader',
                ],
            },
            // babel 转义ts
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/i,
                include: path.resolve(__dirname, '../src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            // 使用ts
            {
                test: /\.ts$/i,
                use: ['ts-loader'],
            },
        ],
    },
    plugins: [
        // 将js引入html
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 输入index.html
            // favicon: path.resolve(__dirname, '../public/favicon.ico'), // favicon图标
        }),
        // 提取css
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
        }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerWebpackPlugin(),
        ],
    },
    resolve: {
        // 使用别名
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
        // 使用扩展名
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    },
}

module.exports = (env, argv) => {
    // 生产环境
    if (argv.mode === 'production') {
        return merge(config, proConfig)
    }

    // 开发环境
    return merge(config, devConfig)
}
