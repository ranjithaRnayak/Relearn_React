import React from 'react';
//import './HelloWorld.css';

const CounterBox = ({ label, value, onIncrease, onDecrease, onReset }) => {
  return (
    <div style={{
      border: '2px solid #ddd',
      padding: '20px',
      borderRadius: '10px',
      marginBottom: '20px',
      textAlign: 'center',
      width: '300px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2>{label}</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</p>
      <button onClick={onIncrease}>Increase</button>{' '}
      <button onClick={onDecrease}>Decrease</button>{' '}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default CounterBox;