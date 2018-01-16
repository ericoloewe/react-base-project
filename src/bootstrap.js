/**
 * Bootstrap file
 */

import { App, Logger } from './configs/index';
import debug from 'debug';
import http from 'http';

let LOGGER;

export class Bootstrap {
  static getInstance() {
    if (Bootstrap._instance == null) {
      LOGGER = new Logger(Bootstrap);
      Bootstrap._instance = new Bootstrap();
    }

    return Bootstrap._instance;
  }

  constructor() {
    this.startApp();
    this.fetchDebug();
    this.fetchPort();
    this.startServer();
  }

  startApp() {
    this.app = App.start();
  }

  fetchDebug() {
    this.debug = debug('initial-express:server');
  }

  /**
   * Get port from environment and store in Express.
   */
  fetchPort() {
    this.port = this._normalizePort(process.env.PORT || '3000');
    this.app.set('port', this.port);
  }

  /**
   * Create HTTP server and listen on provided port, on all network interfaces.
   */
  startServer() {
    this.server = http.createServer(this.app);

    this.server.listen(this.port, () => LOGGER.log(`Server listen port: ${this.port}`));

    this.bindServerError();
    this.bindServerListening();
  }

  /**
   * Event listener for HTTP server "error" event.
   */
  bindServerError() {
    this.server.on('error', (error) => {
      if (error.syscall !== 'listen') {
        throw error;
      }

      var bind = typeof this.port === 'string'
        ? 'Pipe ' + this.port
        : 'Port ' + this.port;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          LOGGER.error(bind + ' requires elevated privileges');
          process.exit(1);
          break;
        case 'EADDRINUSE':
          LOGGER.error(bind + ' is already in use');
          process.exit(1);
          break;
        default:
          throw error;
      }
    });
  }

  bindServerListening() {
    this.server.on('listening', () => {
      var addr = this.server.address();
      var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

      this.debug('Listening on ' + bind)
    });
  }

  _normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }
}