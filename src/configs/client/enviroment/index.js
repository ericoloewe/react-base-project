/**
 * Client enviroment configuration
 */

export class ClientEnviromentConfiguration {
  static isClientSide() {
    return typeof (document) !== "undefined";
  }

  static isServerSide() {
    return typeof (document) === "undefined";
  }
  
  static isDev() {
    let env = ClientEnviromentConfiguration._getCurrentEnv();

    return env == null
      || env == "development";
  }

  static isPrd() {
    let env = ClientEnviromentConfiguration._getCurrentEnv();

    return env == "production";
  }

  static _getCurrentEnv() {
    return process.env.NODE_ENV;
  }
}

export { ClientEnviromentConfiguration as ClientEnvConfig };