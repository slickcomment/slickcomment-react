import * as PropTypes from 'prop-types';
import React from 'react';
import helpers from './helpers';

class AbstractWidget extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.interval = null;
    this.widget = null;
    this.renderWidget = this.renderWidget.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'object') {
      return;
    }

    if (!window.SlickComment) {
      helpers.insertScriptIfNotExist(this.props.scriptSrc);
    }

    this.interval = setInterval(() => {
      if (!window.SlickComment) {
        return null;
      }

      clearInterval(this.interval);

      this.renderWidget();
    }, 200);
  }

  componentDidUpdate() {
    if (!this.widget) {
      return;
    }

    this.widget.update(this.props.config);
    this.props.onChange(this.widget);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  renderWidget() {
    // abstract method
  }

  render() {
    return (
      <div ref={this.ref} />
    );
  }
}

AbstractWidget.propTypes = {
  config: PropTypes.object,
  scriptSrc: PropTypes.string,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

export default AbstractWidget;
