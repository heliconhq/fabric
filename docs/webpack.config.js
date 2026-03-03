const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CreateFileWebpack = require('create-file-webpack');

const packagejson = require('../packages/core/package.json');

const netlifyToml = `
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
    [headers.values]
    Access-Control-Allow-Origin = "*"
`;

const PUBLIC_PATH = process.env.PUBLIC_PATH || '/';

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\bmark\.svg\b/i,
        type: 'asset/resource',
        generator: {
          filename: 'mark.svg',
        },
      },
    ],
  },
  output: {
    publicPath: PUBLIC_PATH,
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      basePath: process.env.ROUTER_BASENAME,
    }),
    new webpack.DefinePlugin({
      process: { env: {} },
    }),
    new CreateFileWebpack({
      path: path.join(__dirname, 'dist'),
      fileName: 'netlify.toml',
      content: netlifyToml,
    }),
    new webpack.DefinePlugin({
      'process.env.ROUTER_BASENAME': JSON.stringify(
        process.env.ROUTER_BASENAME
      ),
      'process.env.FABRIC_VERSION': JSON.stringify(packagejson.version),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
};
