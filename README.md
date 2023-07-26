# React Callback Function Example

This is a simple example of how to use callback functions as props to update state in a parent component in a React application. In this example, we'll have a parent component that maintains a counter state and a child component that increments the counter when a button is clicked.

# Author

Stephan Maina(PERFECT-TECH)

# Installation

Clone the repository.
Navigate to the project directory.
Run npm install to install the required dependencies.
Run npm start to start the development server and view the application in your browser.
# Parent Component

The Parent component is responsible for holding the state and defining the callback function that updates the state.

jsx
Copy code
import React, { useState } from 'react';
import Child from './Child';

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
# Child Component

The Child component receives the callback function as a prop and uses it to update the parent's state when the button is clicked.

jsx
Copy code
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
# Running the Application

After following the installation steps, you should see a React application with the parent component displaying a counter value and the child component rendering a button labeled "Increment." Clicking the button in the child component will trigger the callback function received from the parent and update the counter value in the parent component.

# Conclusion

Using callback functions as props is a powerful technique in React for managing state and handling interactions between components. This example demonstrates a simple use case, but the same pattern can be applied to more complex scenarios in real-world applications.

Feel free to explore and modify the code to further understand how props and callback functions facilitate the flow of information between components in a React application. Happy coding!