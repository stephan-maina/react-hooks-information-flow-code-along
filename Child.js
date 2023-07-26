import React from 'react';

function Child({ onIncrement }) {
  // Handle the click event in the child component
  const handleClick = () => {
    // Invoke the callback function received as a prop
    onIncrement();
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Child;
