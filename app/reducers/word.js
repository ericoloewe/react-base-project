import store from "../stores/index";
import { VALUES } from '../configs/index';

/**
 * @description reducers for routes
 */
export class WordReducer {

  static getInstance() {
    if (WordReducer._instance == null) {
      WordReducer._instance = new WordReducer();
    }

    return WordReducer._instance;
  }

  static action(state, action) {
    return WordReducer.getInstance().chooseAction(state, action);
  }

  constructor() {
    this._defaultState = {};
  }

  chooseAction(state = this._defaultState, action) {
    switch (action.type) {

    }

    return state;
  }
}
