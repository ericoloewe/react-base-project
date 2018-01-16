/**
 * Error 500 container
 */
import React from 'react';
import { LayoutContainer } from "../layout/shared";

class Error500Container extends React.Component {
  get displayName() { return '500'; }

  render() {
    return (
      <LayoutContainer>
        <div id='500'>
          <h1>Internal Service Error (500)</h1>
          <h3>Error message: {this.props.err.message}</h3>
          <code>{this.props.err.stack}</code>
        </div>
      </LayoutContainer>
    );
  }
}

export default Error500Container;
