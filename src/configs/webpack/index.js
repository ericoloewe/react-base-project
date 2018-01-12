/**
 * Webpack configuration
 */

import { commonWebpackConfig } from "./webpack.common";
import { prodWebpackConfig } from "./webpack.prod";
import { devWebpackConfig } from "./webpack.dev";
import { EnvConfig } from "../index";

let currentWebpackConfig = devWebpackConfig;

if (!!EnvConfig && EnvConfig.isPrd()) {
  currentWebpackConfig = prodWebpackConfig;
}

export { currentWebpackConfig };