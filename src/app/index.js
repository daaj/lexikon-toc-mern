import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    const { toc } = this.props;

    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.props.toc }} />
      </div>
    );
  }
}

App.propTypes = {
  toc: PropTypes.string.isRequired
};
