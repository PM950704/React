import { useState } from 'react';
import CountLabel from './Comp/CountLabel.jsx';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </>
  );
}
