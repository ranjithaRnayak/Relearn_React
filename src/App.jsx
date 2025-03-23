import React from 'react';
import HelloWorld from './HelloWorld'; 
import CounterBox from './components/CounterBox';
import useCounter from './hooks/useCounter';
import { NameProvider, useName } from './context/NameContext';
function NameInput() {
  const { name, setName } = useName();

  return (
    <div style={{ marginBottom: '30px' }}>
      <label>Enter your name: </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '5px', fontSize: '16px' }}
      />
    </div>
  );
}
function MainApp() {
  const count = useCounter(0);
  const age = useCounter(25);
  const entries = useCounter(0);
  const {name} = useName();
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      paddingTop: '50px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1>👋 Hello World – {name}!</h1>

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

function App() {
  return (
    <NameProvider>
      <MainApp />
    </NameProvider>
  );
}


export default App;