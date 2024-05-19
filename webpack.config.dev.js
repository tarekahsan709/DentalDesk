var webpack = require("webpack");
var fs = require("fs");
var StringReplacePlugin = require("string-replace-webpack-plugin");
var appVersion = require("./package.json").version;
var TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

var nonJSAssets = [
    "style.css",
    "apple-touch-icon.png",
    "fonts/fabric-icons-72e4a0ad.woff",
    "fonts/fabric-icons-8d8d4ac2.woff",
    "fonts/segoeui-westeuropean/segoeui-light.woff",
    "fonts/segoeui-westeuropean/segoeui-light.woff2",
    "fonts/segoeui-westeuropean/segoeui-regular.woff",
    "fonts/segoeui-westeuropean/segoeui-regular.woff2",
    "fonts/segoeui-westeuropean/segoeui-semibold.woff",
    "fonts/segoeui-westeuropean/segoeui-semibold.woff2",
    "fonts/segoeui-westeuropean/segoeui-semilight.woff",
    "fonts/segoeui-westeuropean/segoeui-semilight.woff2",
];

var processHTML = {
    apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
            const assets = JSON.stringify(
                Object.keys(compilation.assets).concat(nonJSAssets)
            ).replace(/\[|\]/g, "");
            const HTMLFile = fs.readFileSync("./src/index.html", {
                encoding: "utf8",
            });
            fs.writeFileSync(
                "./dist/index.html",
                HTMLFile.replace("/*ASSETS_PLACEHOLDER*/", assets)
            );
        });
    },
};

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "app.js",
        path: __dirname + "/dist/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"],
        plugins: [new TsconfigPathsPlugin({})],
    },
    mode: "development",
    devtool: "inline-source-map",  // Enhances debugging by mapping compiled code back to original source code.
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: [
                    "ts-loader",
                    StringReplacePlugin.replace({
                        replacements: [
                            {
                                pattern: /--VERSION--/g,
                                replacement: () => appVersion,
                            },
                        ],
                    }),
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        processHTML,
        new StringReplacePlugin(),
        new webpack.HotModuleReplacementPlugin(),  // Enables hot module replacement if applicable.
    ],
    devServer: {
        contentBase: './dist',
        hot: true,  // Enables webpack's Hot Module Replacement feature.
        compress: true,
        port: 8080,  // Default development port, change if necessary.
    },
};
