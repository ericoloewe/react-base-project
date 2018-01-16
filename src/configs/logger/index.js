/**
 * Logger
 */

export class Logger {
  constructor(actualInstance) {
    this.actualInstance = actualInstance;
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

    if (typeof (this.actualInstance) === "object" || typeof (this.actualInstance) === "function") {
      instanceName = this.actualInstance.name;
    } else if (typeof (this.actualInstance) === "string") {
      instanceName = this.actualInstance;
    }

    const log = [
      `${new Date()}: ${type.toUpperCase()}`,
      `${instanceName}:`,
      ...args
    ];

    console[type].apply(console, log);
  }
}