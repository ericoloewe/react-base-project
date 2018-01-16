/**
 * Word list component
 */

import React from "react";
import { WordItem } from "./index";
import PropTypes from 'prop-types';

export class WordList extends React.Component {
  static propTypes = {
    words: PropTypes.array
  };

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