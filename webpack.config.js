const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = process.env.NODE_ENV || "development"

module.exports = {
    mode : mode,
    entry : "./src/index.js",
    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader","css-loader"]
            },
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    },
    devtool : "source-map",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "bundle.js"
    },
    plugins : [new HtmlWebpackPlugin()],
    devServer : {
        contentBase : "./dist" 
    }
}