import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { resolve as _resolve } from 'path';


const isDevelopmentMode = process.env.NODE_ENV === 'development';

const generateStyleLoader = loaderName => {
    return [
        _loader,
        {
            loader: 'css-loader',
            options: {
                modules: false,
                importLoaders: 2,
                sourceMap: isDevelopmentMode
            }
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: isDevelopmentMode
            }
        },
        {
            loader: loaderName,
            options: {
                sourceMap: isDevelopmentMode,
                sassOptions: {
                    includePaths: ['src', 'node_modules']
                }
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

export const mode = 'development';
export const entry = ['babel-polyfill', './src/index.jsx'];
export const output = {
    path: _resolve(__dirname, 'dist'),
    filename: 'bundle.js'
};
export const devServer = {
    port: 3000,
    hot: true
};
export const devtool = 'source-map';
export const plugins = [
    new HTMLWebpackPlugin({ template: './index.html' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
];
export const module = {
    rules: [
        {
            test: /\.js$|jsx/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.s?css$/i,
            use: generateStyleLoader('sass-loader')
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: generateUrlLoader('image/png')
        }
    ]
};
export const resolve = {
    alias: {
        components: _resolve(__dirname, 'src/components'),
        store: _resolve(__dirname, 'src/store'),
        src: _resolve(__dirname, 'src'),
        pages: _resolve(__dirname, 'src/pages'),
        features: _resolve(__dirname, 'src/features'),
        authentication: _resolve(__dirname, 'src/features/authentication')
    },
    enforceExtension: false,
    extensions: ['.jsx', '.js', '.css', '.wasm', '.ico', '.gif', '.png', '...']
};
