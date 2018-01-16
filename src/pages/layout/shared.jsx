/**
 * Layout container
 */
import React from 'react';
import { EnvConfig, Config } from "../../../shared/configs";

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
        <title>{Config.getSafe(c => c.GENERAL.APP_TITLE)}</title> 
        {this.renderStyles()}
      </head>
    );
  }

  renderStyles() {
    let styles = [];

    if (EnvConfig.isPrd()) {
      styles.push("vendor-styles");
      styles.push("main-styles");
      styles.push("sandbox-styles");
    }

    return (
      <span id="styles">
        {styles.map((s, i) => <link key={i} rel="stylesheet" href={`./styles/${s}.css`} />)}
      </span>
    );
  }

  renderScripts() {
    let scripts = ["components", "containers"];

    if (EnvConfig.isDev()) {
      scripts.push("vendor-styles");
      scripts.push("main-styles");
      scripts.push("sandbox-styles");
    }

    return (
      <span id="scripts">
        {scripts.map((s, i) => <script key={i} src={`./scripts/${s}.bundle.js`}></script>)}
      </span>
    )
  }
}