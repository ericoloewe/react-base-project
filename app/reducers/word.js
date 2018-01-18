import { store } from "../stores";
import { VALUES } from '../configs';
import { WordAction } from "../actions";

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
    this._defaultState = {
      words: [],
      word: null,
      isFetching: false,
      errors: null,
      hasError: false,
    };
  }

  chooseAction(state = this._defaultState, action) {
    switch (action.type) {
      case WordAction.FETCH: {
        state = {
          ...state,
          isFetching: true
        };
        this.fetchTournaments();
        break;
      }
      case WordAction.FETCH_SUCCESS: {
        state = {
          ...state,
          words: action.words,
          isFetching: false
        };
        break;
      }
      case WordAction.FETCH_FAILURE: {
        state = {
          ...state,
          isFetching: false,
          hasError: true,
          errors: action.errors
        };
        break;
      }
    }

    return state;
  }

  fetchTournaments() {
    setTimeout(() => {
      store.dispatch(WordAction.fetchSuccess([{
        name: 'Lorem',
        description: 'Lorem ipsum dolor'
      }]));
    }, 10);
  }
}
