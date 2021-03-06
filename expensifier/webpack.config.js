// Entry
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")


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
            new MiniCssExtractPlugin({filename: "css/styles.css"}),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            historyApiFallback: true
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: in_production ? false : true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        performance: {
            hints: false
        }
    }
};
