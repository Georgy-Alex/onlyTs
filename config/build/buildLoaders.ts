import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const cssLoaders = buildCssLoaders(isDev)
    const svgLoaders = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }
    const assetLoader = {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
            outputPath: 'public/',
        },
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };
    const fontLoader = {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]',
        },
    };
    return [
        babelLoader,
        typescriptLoader,
        {
            test: /\.css$/i,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: false,
                    },
                },
            ],
        },
        {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                            localIdentName: isDev ? "[path][name]_[local]" : "[hash:base64:8]",
                        },
                        importLoaders: 1,
                    },
                },
                "sass-loader",
            ],
        }, ,
        svgLoaders,
        assetLoader,
        fontLoader,
    ];

}
