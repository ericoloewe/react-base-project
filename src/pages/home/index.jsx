/**
 * Home container
 */
import React from 'react';
import { LayoutContainer } from "../layout/shared";

class HomeContainer extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <div className={"container"}>
          <h1>Welcome {this.props.name}</h1>
          <div data-js="word"></div>
        </div>
      </LayoutContainer>
    );
  }
}

export default HomeContainer;