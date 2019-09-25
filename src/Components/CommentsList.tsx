import React, { Fragment } from 'react';

import CommentItem from './CommentItem';

import { Comment } from '../types/comment';

interface IProps {
  comments: Array<Comment>;
  thumbsUp: Function;
  thumbsDown: Function;
  deleteComment: Function;
  handleEditComment: Function;
}

export default function CommentsList(props: IProps) {
  const {
    comments,
    thumbsUp,
    thumbsDown,
    deleteComment,
    handleEditComment
  } = props;

  return (
    <Fragment>
      <ul>
        {comments.map((comm: Comment, index: number) => (
          <CommentItem
            handleEditComment={handleEditComment}
            deleteComment={deleteComment}
            thumbsDown={thumbsDown}
            thumbsUp={thumbsUp}
            commentId={comm.id}
            commentVotes={comm.votes}
            commentText={comm.text}
            key={index}
          />
        ))}
      </ul>
    </Fragment>
  );
}
