/**
 * @description logger
 */
export class Logger {
  constructor(actualInstance) {
    this.actualInstance = actualInstance
  }

  log() {
    this._logOfType("log", arguments);
  }

  debug() {
    this._logOfType("debug", arguments);
  }

  info() {
    this._logOfType("info", arguments);
  }

  warn() {
    this._logOfType("warn", arguments);
  }

  error() {
    this._logOfType("error", arguments);
  }

  _logOfType(type, args) {
    let instanceName = "Logger";

    if (typeof (this.actualInstance) === "object") {
      instanceName = this.actualInstance.name;
    } else if (typeof (this.actualInstance) === "string") {
      instanceName = this.actualInstance;
    }

    const defaultLog = [
      `${new Date()}: ${type.toUpperCase()}`,
      `${instanceName}:`
    ];

    console[type].apply(console, defaultLog.concat(args));
  }
}