/**
 * Words container
 */
import React from 'react';
import { LayoutContainer } from "../layout/shared";
import { WordList } from '../../components/words/list';

class HomeContainer extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <h1>Welcome {this.props.name}</h1>
        <div className={"container"}>
          <WordList words={this.props.words} />
        </div>
      </LayoutContainer>
    );
  }
}

export default HomeContainer;