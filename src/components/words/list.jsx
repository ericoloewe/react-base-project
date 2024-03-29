/**
 * Word list component
 */

import React from "react";
import ReactDOM from "react-dom";
import { WordItem } from "./index";
import { ClientEnvConfig } from "../../configs/client";
import PropTypes from 'prop-types';

export class WordList extends React.Component {
  static propTypes = {
    words: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  loadOnScreen(words = []) {
    let elements = document.querySelectorAll(`[data-js="word-list"]`);

    elements.forEach(el => {
      ReactDOM.render(<WordList words={words} />, el);
    });
  }

  render() {
    return (
      <div className={'word-list'}>
        <h3>Word list</h3>
        {this.renderItems()}
      </div>
    )
  }

  renderItems() {
    let words = null;

    if (Array.isArray(this.props.words)) {
      words = this.props.words.map(w => <WordItem key={w.name} word={w} />);
    }

    return (
      <div className={"list-group"}>
        {words}
      </div>
    )
  }
}

if (ClientEnvConfig.isClientSide()) {
  WordList.loadOnScreen();
}