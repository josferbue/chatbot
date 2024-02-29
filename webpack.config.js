const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.min.js",
        assetModuleFilename: "[name][ext]"
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
                options: {
                    limit: 10000,
                    name: "assets/[name].[ext]"
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react", "@babel/preset-env"]
                },
                loader: "babel-loader"

            },
        ],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
};