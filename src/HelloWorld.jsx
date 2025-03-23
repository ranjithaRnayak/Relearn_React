import React, { useState } from 'react';
//import './HelloWorld.css';

function HelloWorld(props) {
    const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="center-box">
      <h1>Hello, {props.name}!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={handleIncrease}>Increase</button>{' '}
      <button onClick={handleDecrease}>Decrease</button>{' '}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default HelloWorld;
