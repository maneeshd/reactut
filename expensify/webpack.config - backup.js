// Entry
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = (env, options) => {
    const in_production = options.mode === "production" ? true : false
    const build_mode = in_production ? "production" : "development"
    console.log(`Building package in mode=${build_mode}`)
    return {
        context: __dirname,
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "dist", "static"),
            publicPath: "/static/",
            chunkFilename: "js/[name].js",
            filename: "js/bundle.js"
        },
        mode: build_mode,
        devtool: in_production ? "none" : "cheap-module-source-map",
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
    }
};
