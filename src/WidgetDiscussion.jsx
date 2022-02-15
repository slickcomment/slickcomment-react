import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';

class WidgetDiscussion extends AbstractWidget {
  renderWidget() {
    this.widget = window.SlickComment.renderDiscussion(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }));

    this.props.onReady(this.widget);
  }
}

WidgetDiscussion.propTypes = {
  config: PropTypes.object,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetDiscussion.defaultProps = {
  config: {},
  onReady: () => {},
  onChange: () => {},
};

export default WidgetDiscussion;
