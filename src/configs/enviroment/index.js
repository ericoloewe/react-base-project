/**
 * Server enviroment configuration
 */

export class ServerEnviromentConfiguration {
  static isDev() {
    let env = ServerEnviromentConfiguration._getCurrentEnv();

    return env == null
      || env == "development";
  }

  static isPrd() {
    let env = ServerEnviromentConfiguration._getCurrentEnv();

    return env == "production";
  }

  static _getCurrentEnv() {
    const { App } = require("../index");
    let env = null;

    if (App != null && App.getApp() != null) {
      env = App.getApp().get("env");
    } else {
      env = process.env.NODE_ENV;
    }

    return env;
  }
}

export { ServerEnviromentConfiguration as ServerEnvConfig };