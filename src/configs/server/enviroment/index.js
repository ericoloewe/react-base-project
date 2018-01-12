/**
 * Server enviroment configuration
 */

export class EnviromentConfiguration {
  static isDev() {
    const { App } = require("../index");
    let env = null;
    
    if (App != null && App.getApp() != null) {
      env = App.getApp().get("env");
    } else {
      env = process.env.NODE_ENV;
    }

    return env == null
      || env == "development";
  }

  static isPrd() {
    const { App } = require("../index");
    let env = null;

    if (App != null && App.getApp() != null) {
      env = App.getApp().get("env");
    } else {
      env = process.env.NODE_ENV;
    }

    return env == "production";
  }
}

export { EnviromentConfiguration as EnvConfig };