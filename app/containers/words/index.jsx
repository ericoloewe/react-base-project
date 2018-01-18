/**
 * Words container
 */
import React from 'react';
import ReactDOM from "react-dom";
import { WordList } from '../../components/words/list';
import { store } from '../../stores';
import { ClientEnvConfig } from "../../configs";
import { WordAction } from '../../actions';
import { ObjectUtil } from "../../../shared/utils";

export class WordsContainer extends React.Component {
  static loadOnScreen() {
    let elements = document.querySelectorAll(`[data-js="word"]`);

    elements.forEach(el => {
      ReactDOM.render(<WordsContainer />, el);
    });
  }

  constructor(props) {
    super(props);
    this.resetState();
  }

  resetState() {
    this.state = {
      words: []
    };
  }

  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {      
      this.setState(() => this.reduceState(store.getState()));
    });

    store.dispatch(WordAction.fetch());
  }

  componentWillUnmount() {
    if (ObjectUtil.isFunction(this.unsubscribe)) {
      this.unsubscribe();
    }
  }

  reduceState({ word: { words, isFetching } }) {
    return {
      words,
      isFetching
    };
  }

  render() {
    return (this.renderWordList(this.state.words));
  }

  renderWordList(words) {
    let component = <WordList words={words} />;

    if (this.state.isFetching) {
      component = <h5>Loading</h5>;
    }

    return component;
  }
}

if (ClientEnvConfig.isClientSide()) {
  WordsContainer.loadOnScreen();
}