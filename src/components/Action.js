import React from 'react';

const Action = ({ hasOptions, handlePick }) => {
  return (
    <div>
      <button 
        disabled={!hasOptions}
        onClick={handlePick}
      >
        What should I do?
      </button>
    </div>
  );
}

export default Action;