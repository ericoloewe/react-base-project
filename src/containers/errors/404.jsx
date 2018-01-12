/**
 * Error 404 Container
 */
import React from 'react';
import { LayoutContainer } from "../layout/shared";

class Error404Container extends React.Component {
  get displayName() { return '404'; }

  render() {
    return (
      <LayoutContainer>
        <h1>URL: {this.props.location.pathname} - Not Found(404)</h1>
      </LayoutContainer>
    );
  }
}

export default Error404Container;