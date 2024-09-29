import { Configuration, ProgressPlugin } from "webpack";
import { BuildOptions } from "config-types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({ mode, analyzer, paths, port }: BuildOptions): Configuration["plugins"] {
    const isDev = mode === "development";
    const isProd = mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({ template: paths.html }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public/mock-assets/tires/spiky-tires.png",
                    to: "mock-assets/tires"
                }
            ]
        })
    ]

    if (isDev) {
        plugins.push(new ProgressPlugin())
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:8].css",
                chunkFilename: "css/[name].[contenthash:8].css"
            })
        )
    }

    if (analyzer) {
        plugins.push(new BundleAnalyzerPlugin());
    }

    return plugins;
}