/**
 * Server enviroment configuration
 */
import { ClientEnvConfig } from "../../../app/configs";
import { ServerEnvConfig } from "../../../src/configs";

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
    return EnviromentConfiguration.isClientSide()
      ? ClientEnvConfig.isPrd()
      : ServerEnvConfig.isPrd();
  }
}

export { EnviromentConfiguration as EnvConfig };