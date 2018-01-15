/**
 * Server enviroment configuration
 */
import { ServerEnvConfig, ClientEnvConfig } from "../../index";

export class EnviromentConfiguration {
  static isClientSide() {
    return typeof (document) !== "undefined";
  }

  static isServerSide() {
    return typeof (document) === "undefined";
  }

  static isDev() {
    return EnviromentConfiguration.isClientSide()
      ? ClientEnvConfig.isDev()
      : ServerEnvConfig.isDev();
  }

  static isPrd() {
    const S = require("../../index");

    return EnviromentConfiguration.isClientSide()
      ? ClientEnvConfig.isPrd()
      : ServerEnvConfig.isPrd();
  }
}

export { EnviromentConfiguration as EnvConfig };