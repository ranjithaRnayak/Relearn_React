import { useState } from 'react';

function useCounter(initial = 0) {
  const [value, setValue] = useState(initial);

  const increase = () => setValue(prev => prev + 1);
  const decrease = () => setValue(prev => prev - 1);
  const reset = () => setValue(initial);

  return {
    value,
    increase,
    decrease,
    reset
  };
}

export default useCounter;
