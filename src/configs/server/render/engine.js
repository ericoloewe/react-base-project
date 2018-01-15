/**
 * Engine configuration
 */
import ReactEngine from 'react-engine';
import { ServerEnvConfig } from "../../index";

export class RenderEngineConfiguration {
  static getInstance() {
    if (RenderEngineConfiguration._instance == null) {
      RenderEngineConfiguration._instance = new RenderEngineConfiguration();
    }

    return RenderEngineConfiguration._instance;
  }

  static create() {
    let _this = RenderEngineConfiguration.getInstance();

    _this.createEngine();

    return _this.engine;
  }

  createEngine() {
    this.engine = ReactEngine.server.create({
      performanceCollector: (stats) => this.logStatistics(stats),
      staticMarkup: true
    });
  }

  logStatistics(stats) {
    if (ServerEnvConfig.isDev()) {
      // console.log(stats);
    }
  }
}

export { RenderEngineConfiguration as EngineConfiguration };