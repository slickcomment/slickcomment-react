import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';

class WidgetModeration extends AbstractWidget {
  renderWidget() {
    this.widget = window.SlickComment.renderModeration(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }));

    this.props.onReady(this.widget);
  }
}

WidgetModeration.propTypes = {
  config: PropTypes.object,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetModeration.defaultProps = {
  config: {},
  onReady: () => {},
  onChange: () => {},
};

export default WidgetModeration;
