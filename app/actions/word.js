/**
 * Actions > Word
 */
export class WordAction {
  static FETCH = "FETCH";
  static FETCH_SUCCESS = "FETCH_SUCCESS";
  static FETCH_FAILURE = "FETCH_FAILURE";

  static fetch() {
    return {
      type: WordAction.FETCH
    };
  }

  static fetchSuccess(words) {
    return {
      type: WordAction.FETCH_SUCCESS,
      words
    };
  }

  static fetchFailure(errors) {
    return {
      type: WordAction.FETCH_FAILURE,
      errors
    };
  }
}