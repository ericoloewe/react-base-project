/**
 * Word item component
 */

import React from "react";

export class WordItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'word-item list-group-item'}>
        <h5>{this.props.word.name}</h5>
        <small>{this.props.word.description}</small>
      </div>
    );
  }
}