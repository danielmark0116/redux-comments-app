import React, { useState, Fragment } from 'react';

import CommentEdit from './ComentEdit';

interface IProps {
  commentText: string;
  commentVotes: number;
  commentId: string;
  thumbsUp: Function;
  thumbsDown: Function;
  deleteComment: Function;
  handleEditComment: Function;
}

const CommentItem = (props: IProps) => {
  const [showEdit, toggleShowEdit] = useState(false);

  const { handleEditComment, commentId } = props;

  return (
    <Fragment>
      <li>
        {props.commentText}
        <br />

        <b>
          <button onClick={() => props.thumbsUp(props.commentId)}>+</button>{' '}
          <button onClick={() => props.thumbsDown(props.commentId)}>-</button>
          <button onClick={() => props.deleteComment(props.commentId)}>
            DEL
          </button>
          <button onClick={() => toggleShowEdit(!showEdit)}>
            EDIT COMMENT
          </button>
          Likes: {props.commentVotes}
        </b>
      </li>
      {showEdit && (
        <CommentEdit
          commentId={commentId}
          handleEditComment={handleEditComment}
          closeEdit={() => {
            toggleShowEdit(false);
          }}
        />
      )}
    </Fragment>
  );
};

export default CommentItem;
