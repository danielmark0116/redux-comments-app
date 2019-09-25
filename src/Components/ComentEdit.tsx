import React, { useState } from 'react';

interface IProps {
  handleEditComment: Function;
  commentId: string;
  closeEdit: Function;
}

const ComentEdit = (props: IProps) => {
  const [inputValue, handleChange] = useState('');

  const { handleEditComment, commentId, closeEdit } = props;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleEditComment(commentId, inputValue);
          handleChange('');
          closeEdit();
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={e => handleChange(e.target.value)}
        />
        <button>EDIT</button>
      </form>
    </div>
  );
};

export default ComentEdit;
