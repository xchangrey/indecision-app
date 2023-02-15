import React from 'react';

const Option = ({option, handleDeleteOption}) => {
  return (
    <li>
      {option}
      <button onClick={(e) => {
        handleDeleteOption(option);
      }}>remove</button>
    </li>
  );
}

export default Option;