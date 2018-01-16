/**
 * Middleware / logger
 */

import { Logger, Config } from "../configs";

const LOGGER = new Logger("logger");
const IS_HARD_LOG_ENABLED = Config.getSafe(c => c.REDUX.HARD_LOG_ENABLE);

/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action => {
  if (IS_HARD_LOG_ENABLED) {
    LOGGER.info('dispatching', action);
  }

  let result = next(action);

  if (IS_HARD_LOG_ENABLED) {
    LOGGER.info('next state', store.getState());
  }

  return result;
}