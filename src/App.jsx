import React from 'react';
import HelloWorld from './HelloWorld'; 
import CounterBox from './components/CounterBox';
import useCounter from './hooks/useCounter';
function App() {
  const count = useCounter(0);
  const age = useCounter(25);
  const entries = useCounter(0);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      paddingTop: '50px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1>👋 Hello World – Let’s Re-Learn Again!</h1>

      <CounterBox
        label="Count"
        value={count.value}
        onIncrease={count.increase}
        onDecrease={count.decrease}
        onReset={count.reset}
      />

      <CounterBox
        label="Age"
        value={age.value}
        onIncrease={age.increase}
        onDecrease={age.decrease}
        onReset={age.reset}
      />

      <CounterBox
        label="Entries"
        value={entries.value}
        onIncrease={entries.increase}
        onDecrease={entries.decrease}
        onReset={entries.reset}
      />
    </div>
  );
}

export default App;