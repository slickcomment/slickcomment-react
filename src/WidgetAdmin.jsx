import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';
import {defaultSdkUrl} from './constants';

class WidgetAdmin extends AbstractWidget {
  renderWidget() {
    window.SlickComment.renderAdminWidget({
      ...this.props.config,
      containerElement: this.ref.current,
    })
      .then((instance) => {
        this.widget = instance;
        this.props.onReady(instance);
      });
  }
}

WidgetAdmin.propTypes = {
  config: PropTypes.object,
  scriptSrc: PropTypes.string,
  onReady: PropTypes.func,
  onChange: PropTypes.func
};

WidgetAdmin.defaultProps = {
  scriptSrc: defaultSdkUrl,
  onReady: () => {},
  onChange: () => {},
};

export default WidgetAdmin;
