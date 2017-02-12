let webpack = require("webpack");
let path = require("path");
let PROD = JSON.parse(process.env.PROD_ENV || '0');

let DEV = path.resolve(__dirname, "dev");
let OUTPUT = path.resolve(__dirname, "dist");

let config = {
    entry: DEV + "/app.jsx",
    output: {
        path: OUTPUT,
        filename: PROD ? "bundle.min.js" : "bundle.js"
    },
    module: {
        loaders: [{
            include: DEV,
            loader: "babel-loader"
        }]
    },
    plugins: PROD ? [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ] : []
};

module.exports = config