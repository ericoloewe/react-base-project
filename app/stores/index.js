/**
 * Stores
 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import { WordReducer } from "../reducers";
import { logger, crashReporter } from "../middlewares/index";

export const store = createStore(
  combineReducers({
    word: WordReducer.action
  }),
  applyMiddleware(
    logger,
    crashReporter
  )
);
