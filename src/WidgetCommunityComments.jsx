import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';
import {defaultSdkUrl} from './constants';

class WidgetCommunityComments extends AbstractWidget {
  renderWidget() {
    this.widget = window.SlickComment.renderCommunityComments(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }));

    this.props.onReady(this.widget);
  }
}

WidgetCommunityComments.propTypes = {
  config: PropTypes.object,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetCommunityComments.defaultProps = {
  config: {},
  onReady: () => {},
  onChange: () => {},
};

export default WidgetCommunityComments;
