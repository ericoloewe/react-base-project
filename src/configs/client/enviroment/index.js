/**
 * Client enviroment configuration
 */

export class ClientEnviromentConfiguration {
  static isClientSide() {
    return typeof(document) !== "undefined";
  }

  static isServerSide() {
    return typeof(document) === "undefined";
  }
}

export { ClientEnviromentConfiguration as ClientEnvConfig };