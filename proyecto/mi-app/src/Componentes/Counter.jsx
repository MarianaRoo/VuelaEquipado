// Counter.js
import React, { useState } from 'react';

const Counter = () => {
 const [count, setCount] = useState(0);

 return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
 );
};

export default Counter;

// Counter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments counter on button click', () => {
 render(<Counter />);
 const button = screen.getByText(/click me/i);
 const countElement = screen.getByText(/you clicked 0 times/i);

 expect(countElement).toBeInTheDocument();
 fireEvent.click(button);
 expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
});