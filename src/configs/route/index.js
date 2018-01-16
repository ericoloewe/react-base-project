import { App } from "../index";
import { home, words } from "../../controllers";

export class RouteConfiguration {
  static configure() {
    const app = App.getApp();

    app.use('/', home);
    app.use('/words', words);
  }
}
