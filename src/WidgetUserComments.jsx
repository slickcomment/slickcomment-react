import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';

class WidgetUserComments extends AbstractWidget {
  renderWidget() {
    this.widget = window.SlickComment.renderUserComments(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }));

    this.props.onReady(this.widget);
  }
}

WidgetUserComments.propTypes = {
  config: PropTypes.object,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetUserComments.defaultProps = {
  config: {},
  onReady: () => {},
  onChange: () => {},
};

export default WidgetUserComments;
