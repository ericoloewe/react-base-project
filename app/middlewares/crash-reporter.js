/**
 * Middleware / crashReporter
 */
import { Logger } from "../configs";

const LOGGER = new Logger("crashReporter");

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (ex) {
    LOGGER.error('Caught an exception!', ex);
    
    throw ex;
  }
}