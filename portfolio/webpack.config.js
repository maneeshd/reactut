// Entry
const path = require("path");
const BundleTracker = require("webpack-bundle-tracker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    context: __dirname,
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "static"),
        publicPath: "/static/",
        chunkFilename: "js/[name].js",
        filename: "js/bundle.js"
    },
    devtool: "cheap-module-source-map",
    mode: "production",
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new BundleTracker({filename: "./webpack-stats.json"}), 
        new MiniCssExtractPlugin({filename: "css/custom.css", chunkFilename: "css/[name].css"})
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // Customer vendor
                vendor: {
                    chunks: "all",
                    name: "vendor",
                    test: /node_modules/,
                    filename: "js/vendor.js"
                }
            }
        }
    },
    performance: {
        hints: false
    }
};
