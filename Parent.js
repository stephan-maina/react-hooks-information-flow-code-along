import React, { useState } from 'react';

function Parent() {
  // State in the parent component
  const [counter, setCounter] = useState(0);

  // Callback function to update the parent's state
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <p>Counter: {counter}</p>
      {/* Render the child component and pass the callback function as a prop */}
      <Child onIncrement={handleIncrement} />
    </div>
  );
}

export default Parent;
