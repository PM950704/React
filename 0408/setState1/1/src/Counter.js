import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
    console.log(count);
  };
  const minus = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div className="container">
      <h2 className="int">{count}</h2>
      <button className="plus" onClick={plus}>
        +
      </button>
      <button className="minus" onClick={minus}>
        -
      </button>
    </div>
  );
};
export default Counter;
