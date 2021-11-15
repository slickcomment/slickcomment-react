import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';
import {defaultSdkUrl} from './constants';

class WidgetUserComments extends AbstractWidget {
  renderWidget() {
    console.log(window.SlickComment);
    window.SlickComment.renderUserComments(Object.assign(this.props.config, {
      containerElement: this.ref.current
    }))
      .then((instance) => {
        this.widget = instance;
        this.props.onReady(instance);
      });
  }
}

WidgetUserComments.propTypes = {
  config: PropTypes.object,
  scriptSrc: PropTypes.string,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetUserComments.defaultProps = {
  scriptSrc: defaultSdkUrl,
  onReady: () => {},
  onChange: () => {},
};

export default WidgetUserComments;
