/**
 * Application configuration
 */

import Express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { RouteConfiguration } from "./index";
import { EngineConfiguration } from "./render/engine";

export class App {
  static getInstance() {
    if (App._instance == null) {
      App._instance = new App();
    }

    return App._instance;
  }

  static getApp() {
    const instance = App.getInstance();

    if (instance == null) {
      throw new Error("There is no app instance!");
    }

    return instance.app;
  }

  static start() {
    let _this = App.getInstance();

    _this.startExpress();

    return _this.app;
  }

  constructor() {
  }

  startExpress() {
    this.app = new Express();

    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(Express.static(path.join(__dirname, '../../../public')));

    this.fetchControllersConfiguration();
    this.fetchRenderEngineConfiguration();
    this.fetchErrorHandler();
  }

  fetchErrorHandler() {
    this.app.use((err, req, res, next) => {
      console.log(err, req, res, next);

      if (res.headersSent) {
        return next(err);
      }

      if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
        return res.redirect(302, err.redirectLocation);
      } else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
        return res.status(404).render('errors/404');
      } else {
        return res.status(500).render('errors/500', {
          err: {
            message: err.message,
            stack: err.stack
          }
        });
      }
    });
  }

  fetchControllersConfiguration() {
    RouteConfiguration.configure();
  }

  fetchRenderEngineConfiguration() {
    var engine = EngineConfiguration.create();

    this.app.engine(".jsx", engine);
    this.app.set('views', path.join(__dirname, '../../containers'));
    this.app.set('view engine', 'jsx');
    this.app.set('view', require('react-engine/lib/expressView'));
  }
}