// Entry
const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "dist", "static", "js"),
        filename: "bundle.js"
    },
    devtool: "cheap-module-eval-source-map",
    mode: "development",
    module: {
        rules: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist")
    }
};