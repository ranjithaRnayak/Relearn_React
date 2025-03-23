import { createContext, useContext, useState } from 'react';

// 1. Create context
const NameContext = createContext();

// 2. Create provider
export const NameProvider = ({ children }) => {
  const [name, setName] = useState("Potato");
  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

// 3. Custom hook to use context easily
export const useName = () => useContext(NameContext);
