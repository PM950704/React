import { useState } from 'react';
import './App.css';
import Page from './Components/Page';
import { ThemeContext } from './context/ThemeContext';
function Counter() {
  const [isDark, setIsDark] = useState(false);
  return (
    // 📌
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
}
export default Counter;
