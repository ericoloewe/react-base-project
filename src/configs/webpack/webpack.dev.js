/**
 * Webpack dev config
 */
import merge from 'webpack-merge';
import { commonWebpackConfig } from './webpack.common';

export class WebpackDevConfig {
  constructor() {
    this.resetNodeEnv();
    this.resetDevtool();
    this.resetModules();
  }

  resetNodeEnv() {
    process.env.BABEL_ENV = 'development';
    process.env.NODE_ENV = 'development';
  }

  resetDevtool() {
    this.devtool = 'inline-source-map';
  }

  resetModules() {
    this.module = {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader", options: { sourceMap: true } },
            { loader: "sass-loader", options: { sourceMap: true } }
          ]
        },
      ]
    };
  }
}

export const devWebpackConfig = merge(commonWebpackConfig, new WebpackDevConfig());

