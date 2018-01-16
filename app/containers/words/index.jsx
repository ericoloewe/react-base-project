/**
 * Words container
 */
import React from 'react';
import ReactDOM from "react-dom";
import { WordList } from '../../components/words/list';
import { store } from '../../stores';
import { Provider, connect } from 'react-redux';
import { ClientEnvConfig } from "../../configs";

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
    this.subscribeEvents();
    // this.dispachEvents();
  }


  componentWillUnmount() {
    this.unsubscribeEvents();
  }

  subscribeEvents() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().word);
    });
  }

  unsubscribeEvents() {
    if (typeof (this.unsubscribe) === "function") {
      this.unsubscribe();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className={"container"}>
          <WordList words={this.state.words} />
        </div>
      </Provider>
    );
  }
}

WordsContainer = connect()(WordsContainer);

if (ClientEnvConfig.isClientSide()) {
  WordsContainer.loadOnScreen();
}