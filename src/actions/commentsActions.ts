import * as types from './types';

import { CommentTypes } from './types';
import { Comment } from '../types/comment';

export function addComment(comment: Comment): CommentTypes {
  return {
    type: types.ADD_COMMENT,
    payload: comment
  };
}

export function editComment(
  commentId: string,
  newCommentText: string
): CommentTypes {
  return {
    type: types.EDIT_COMMENT,
    payload: {
      id: commentId,
      text: newCommentText
    }
  };
}

export function deleteComment(commentId: string): CommentTypes {
  return {
    type: types.DELETE_COMMENT,
    payload: commentId
  };
}

export function thumbsUp(commentId: string) {
  return {
    type: types.THUMBS_UP,
    payload: commentId
  };
}

export function thumbsDown(commentId: string) {
  return {
    type: types.THUMBS_DOWN,
    payload: commentId
  };
}
