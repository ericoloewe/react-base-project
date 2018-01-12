/**
 * Layout container
 */
import React from 'react';
import { EnvConfig } from "../../configs";

export class LayoutContainer extends React.Component {
  render() {
    return (
      <html>
        {this.renderHeader()}
        <body>
          {this.props.children}
          {this.renderScripts()}
        </body>
      </html>
    );
  }

  renderHeader() {
    return (
      <head>
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>About me</title>
        {this.renderStyles()}
      </head>
    );
  }

  renderStyles() {
    let styles = [];

    if (EnvConfig.isPrd()) {
      styles.push(<link key={1} rel="stylesheet" href="./styles/vendor-styles.css" />);
      styles.push(<link key={2} rel="stylesheet" href="./styles/main-styles.css" />);
      styles.push(<link key={3} rel="stylesheet" href="./styles/sandbox-styles.css" />);
    }

    return (
      <span id="styles">
        {styles}
      </span>
    );
  }

  renderScripts() {
    let scripts = [
      <script key={1} src='./scripts/components.bundle.js'></script>
    ];

    if (EnvConfig.isDev()) {
      scripts.push(<script key={2} src='./scripts/vendor-styles.bundle.js'></script>);
      scripts.push(<script key={3} src='./scripts/main-styles.bundle.js'></script>);
      scripts.push(<script key={4} src='./scripts/sandbox-styles.bundle.js'></script>);
    }

    return (
      <span id="scripts">
        {scripts}
      </span>
    )
  }
}