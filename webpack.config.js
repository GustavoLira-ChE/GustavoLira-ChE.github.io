const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "/",
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ],
            },
            {
                test: /\.png$/,
                type: "assets/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            favicon: "./src/assets/favicon-16x16.png"
        }),
<<<<<<< HEAD
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
=======
        new ESLintPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname,'src','assets'), to: 'assets'}
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname,'dist'),
        port: 3003,
        historyApiFallback: true
    }
>>>>>>> development
};