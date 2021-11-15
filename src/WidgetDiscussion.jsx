import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';
import {defaultSdkUrl} from './constants';

class WidgetDiscussion extends AbstractWidget {
  renderWidget() {
    console.log(window.SlickComment);
    window.SlickComment.renderDiscussion(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }))
      .then((instance) => {
        this.widget = instance;
        this.props.onReady(instance);
      });
  }
}

WidgetDiscussion.propTypes = {
  config: PropTypes.object,
  scriptSrc: PropTypes.string,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetDiscussion.defaultProps = {
  scriptSrc: defaultSdkUrl,
  onReady: () => {},
  onChange: () => {},
};

export default WidgetDiscussion;
