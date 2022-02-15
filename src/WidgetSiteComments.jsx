import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';

class WidgetSiteComments extends AbstractWidget {
  renderWidget() {
    this.widget = window.SlickComment.renderSiteComments(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }));

    this.props.onReady(this.widget);
  }
}

WidgetSiteComments.propTypes = {
  config: PropTypes.object,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetSiteComments.defaultProps = {
  config: {},
  onReady: () => {},
  onChange: () => {},
};

export default WidgetSiteComments;
