const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');


const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isNodeModulesWatch = !!process.env.NODE_MODULES_WATCH;

const generateStyleLoader = () => {
    return [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: false,
                importLoaders: 2,
                sourceMap: isDevelopmentMode
            }
        }
    ];
};

const generateUrlLoader = (mimeType, limit = 10000) => [{
    loader: 'url-loader',
    options: {
        limit,
        mimetype: mimeType
    }
}];

const getRules = () => {
    const babelRules = [
        {
            test: /\.js?$/,
            loader: 'babel-loader'
        },
    ];

    return [
        ...babelRules,
        {
            test: /\.s?css$/,
            use: generateStyleLoader('sass-loader')
        },
        {
            test: /\.(woff|woff2|ttf|eot)$/,
            loader: 'file-loader'
        },
        {
            test: /\.svg$/,
            loader: '@svgr/webpack',
            options: {
                ref: true,
                svgoConfig: {
                    plugins: [
                        {
                            removeViewBox: false,
                            removeDimensions: true,
                            inlineStyles: {
                                // see available settings on https://github.com/svg/svgo/issues/296#issuecomment-380208905
                                onlyMatchedOnce: false
                            }
                        }
                    ]
                }
            }
        },
        {
            test: /\.png$/,
            use: generateUrlLoader('image/png')
        },
        {
            test: /\.gif$/,
            loader: 'file-loader'
        }
    ];
};

const getPlugins = () => {
    const plugins = [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*'],
            cleanStaleWebpackAssets: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
            'APP_ENV': JSON.stringify(process.env.APP_ENV || 'local')
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
            chunkFilename: '[id]-[contenthash].css'
        })
    ];

    return plugins;
};

const getOptimizationConfig = () => {
    if (isDevelopmentMode) {
        return {};
    }

    return {
        splitChunks: {},
        minimizer: [
            new ESBuildMinifyPlugin({
                target: 'es2015'
            })
        ]
    };
};

const getSnapshotConfig = () => {
    if (isNodeModulesWatch) {
        return {
            // TODO: we can update this logic after https://github.com/webpack/webpack/issues/12112 would be done
            managedPaths: []
        };
    }

    return undefined; // default configuration
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/build/',
        filename: 'main-[contenthash].js',
        chunkFilename: '[name]-[contenthash].js'
    },
    mode: isDevelopmentMode ? 'development' : 'production',
    module: {
        rules: getRules()
    },
    plugins: getPlugins(false),
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.json', '.js', '.jsx'],
        symlinks: false
    },
    devtool: isDevelopmentMode ? 'source-map' : false,
    watch: false,
    optimization: getOptimizationConfig(),
    snapshot: getSnapshotConfig(),
    stats: {
        all: false,
        builtAt: true,
        entrypoints: true,
        env: true,
        errors: true,
        errorDetails: true,
        modules: true,
        outputPath: true,
        performance: true,
        timings: true,
        warnings: true
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
            publicPath: '/'
        },
        port: 3000,
        hot: false
    }
};
