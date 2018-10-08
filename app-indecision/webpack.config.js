// Entry
const path = require("path");


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist", "static", "js"),
        publicPath: "/static/js/",
        chunkFilename: "vendor.js",
        filename: "bundle.js"
    },
    devtool: "inline-source-map",
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
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                // vendor chunk
                vendor: {
                    //name of the file
                    name: "vendor",
                    // async + async chunks
                    chunks: "all",
                    // import file path containing node_modules
                    test: /node_modules/
                }
            }
        }
    },
    performance: {
        hints: false
    }
};
