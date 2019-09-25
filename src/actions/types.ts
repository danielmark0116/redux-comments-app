import { Comment, CommentEdit } from '../types/comment';

export const ADD_COMMENT: string = 'ADD_COMMENT';
export const EDIT_COMMENT: string = 'EDIT_COMMENT';
export const DELETE_COMMENT: string = 'DELETE_COMMENT';
export const THUMBS_UP: string = 'THUMBS_UP';
export const THUMBS_DOWN: string = 'THUMBS_DOWN';

interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: Comment;
}

interface EditCommentAction {
  type: typeof EDIT_COMMENT;
  payload: CommentEdit;
}

interface DeleteCommentAction {
  type: typeof DELETE_COMMENT;
  payload: string;
}

interface ThumbsUpAction {
  type: typeof THUMBS_UP;
  payload: string;
}

interface ThumbsDownAction {
  type: typeof THUMBS_DOWN;
  payload: string;
}

export type CommentTypes =
  | AddCommentAction
  | EditCommentAction
  | ThumbsUpAction
  | ThumbsDownAction
  | DeleteCommentAction;
