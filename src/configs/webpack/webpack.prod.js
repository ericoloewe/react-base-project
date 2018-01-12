/**
 * Webpack prod config
 */
import merge from 'webpack-merge';
import { commonWebpackConfig } from './webpack.common';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export class WebpackProdConfig {
  constructor() {
    this.resetNodeEnv();
    this.resetPlugins();
    this.resetModules();
  }

  resetNodeEnv() {
    process.env.BABEL_ENV = 'production';
    process.env.NODE_ENV = 'production';
  }

  resetPlugins() {
    this.plugins = [
      new UglifyJSPlugin(),
      new ExtractTextPlugin('styles/main.css')
    ];
  }

  resetModules() {
    this.module = {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract([
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ])
        }
      ]
    };
  }
}

export const prodWebpackConfig = merge(commonWebpackConfig, new WebpackProdConfig());