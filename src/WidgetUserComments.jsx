import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';
import {defaultSdkUrl} from './constants';

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
  scriptSrc: PropTypes.string,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetUserComments.defaultProps = {
  config: {},
  scriptSrc: defaultSdkUrl,
  onReady: () => {},
  onChange: () => {},
};

export default WidgetUserComments;
