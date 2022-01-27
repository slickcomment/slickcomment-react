import * as PropTypes from 'prop-types';
import React from 'react';
import AbstractWidget from './AbstractWidget.jsx';

class CommentCount extends AbstractWidget {
  renderWidget() {
    window.SlickComment.renderCommentCounts(this.props.config);
  }

  render() {
    const {config, children} = this.props;
    const {communityId, pageId} = config;

    return (
      <span data-sc-community-id={communityId} data-sc-page-id={pageId}>
        {children}
      </span>
    );
  }
}

CommentCount.defaultProps = {
  config: {},
};

CommentCount.propTypes = {
  config: PropTypes.object,
};

export default CommentCount;
