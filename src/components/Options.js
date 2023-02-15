import React from 'react';
import Option from './Option';

const Options = ({handleDeleteOptions, handleDeleteOption, options}) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      { options.length === 0 && <p>Please add an option to get started!</p> }
      <ol>
        {
          options.length > 0 && options.map((option, index) => (
          <Option key={index} option={option} handleDeleteOption={handleDeleteOption} />
        ))}
      </ol>
    </div>
  )
}

export default Options;