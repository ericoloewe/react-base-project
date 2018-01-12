/**
 * Word list component
 */

import React from "react";
import ReactDOM from "react-dom";
import { WordItem } from "./index";
import { ClientEnvConfig } from "../../configs/client";

export class WordList extends React.Component {
  constructor(props) {
    super(props);
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
  ReactDOM.render(<WordList />, document.querySelectorAll(`[data-js="word-list"]`)[0]);
}