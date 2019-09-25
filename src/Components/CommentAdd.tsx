import React, { useState, Fragment } from 'react';

import uuid from 'uuid';

interface IProps {
  handleAddComment: Function;
}

export default function CommentAdd(props: IProps) {
  const [inputValue, handleChange] = useState('');

  const { handleAddComment } = props;

  const newComment = {
    id: uuid.v4(),
    votes: 0
  };

  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault();
          inputValue.length > 0 &&
            handleAddComment({ ...newComment, text: inputValue });
          handleChange('');
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={e => handleChange(e.target.value)}
        />
        <button>ADD COMMENT</button>
      </form>
    </Fragment>
  );
}
