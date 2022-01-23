import WidgetDiscussion from './WidgetDiscussion.jsx';
import WidgetUserComments from './WidgetUserComments.jsx';
import WidgetCommunityComments from './WidgetCommunityComments.jsx';
import WidgetModeration from './WidgetModeration.jsx';
import CommentCount from './CommentCount.jsx';

const SlickComment = {
  WidgetDiscussion,
  WidgetUserComments,
  WidgetCommunityComments,
  WidgetAdmin: WidgetModeration,
  CommentCount,
};

export default SlickComment;
