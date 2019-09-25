import React, { Component, Fragment, Dispatch } from 'react';
import { connect } from 'react-redux';

import CommentsList from '../components/CommentsList';
import {
  addComment,
  thumbsUp,
  thumbsDown,
  deleteComment,
  editComment
} from '../actions/commentsActions';

import CommentAdd from '../components/CommentAdd';

import { Comment } from '../types/comment';
import { AppState } from '../reducers/index';
import { CommentTypes } from '../actions/types';

interface IProps {
  addComment: Function;
  editComment: Function;
  thumbsUp: Function;
  thumbsDown: Function;
  deleteComment: Function;
  comments: Array<Comment>;
}

class Comments extends Component<IProps, {}> {
  handleAddComment = (comment: Comment) => {
    const { addComment } = this.props;

    addComment(comment);
  };

  handleEditComment = (commentId: string, newCommentText: string) => {
    const { editComment } = this.props;

    editComment(commentId, newCommentText);
  };

  handleThumbsUp = (commentId: string) => {
    const { thumbsUp } = this.props;

    thumbsUp(commentId);
  };

  handleThumbsDown = (commentId: string) => {
    const { thumbsDown } = this.props;

    thumbsDown(commentId);
  };

  handleDeleteComment = (commentId: string) => {
    const { deleteComment } = this.props;

    deleteComment(commentId);
  };

  render() {
    const { comments } = this.props;

    return (
      <Fragment>
        <CommentsList
          thumbsDown={this.handleThumbsDown}
          thumbsUp={this.handleThumbsUp}
          deleteComment={this.handleDeleteComment}
          handleEditComment={this.handleEditComment}
          comments={comments}
        />
        <br />
        <hr />
        <CommentAdd handleAddComment={this.handleAddComment} />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({ comments: state.comments });

const mapDispatchToProps = (dispatch: Dispatch<CommentTypes>) => ({
  addComment: (comment: Comment) => dispatch(addComment(comment)),
  editComment: (commentId: string, newCommentText: string) =>
    dispatch(editComment(commentId, newCommentText)),
  thumbsUp: (commentId: string) => dispatch(thumbsUp(commentId)),
  thumbsDown: (commentId: string) => dispatch(thumbsDown(commentId)),
  deleteComment: (commentId: string) => dispatch(deleteComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
