/**
 * Webpack config
 */
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export class WebpackCommonConfig {
  get rootPath() { return path.resolve(__dirname, '../../..'); }
  get sourcePath() { return path.resolve(this.rootPath, 'src'); }
  get publicPath() { return path.resolve(this.rootPath, 'public'); }

  constructor() {
    this.resetEntries();
    this.resetOutputs();
    this.resetPlugins();
    this.resetModules();
    this.resetResolve();
  }

  resetEntries() {
    this.entry = {
      components: path.resolve(this.sourcePath, 'components/index.js'),
      "main-styles": path.resolve(this.sourcePath, 'styles/main.scss'),
      "vendor-styles": path.resolve(this.sourcePath, 'styles/vendor.scss'),
      "sandbox-styles": path.resolve(this.sourcePath, 'styles/sandbox.scss')
    };
  }

  resetOutputs() {
    this.output = {
      filename: 'scripts/[name].bundle.js',
      path: this.publicPath
    };
  }

  resetPlugins() {
    this.plugins = [
      new CleanWebpackPlugin([this.publicPath])
    ];
  }

  resetModules() {
    this.module = {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    };
  }

  resetResolve() {
    this.resolve = {
      extensions: ['.js', '.jsx', '.json']
    };
  }
}

export const commonWebpackConfig = new WebpackCommonConfig();