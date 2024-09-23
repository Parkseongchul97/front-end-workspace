import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // 0으로 시작한다

  const setCounter = () => {
    setCount(count + 1);
  };
  const plusCounter = () => {
    setCount(count + 10);
  };
  const minusCounter = () => {
    setCount(count - 10);
  };
  const resetCounter = () => {
    setCount(count - count);
  };

  return (
    <div>
      <h1>Total Clicks : {count} </h1>
      <button onClick={setCounter}>1더하기!</button>
      <button onClick={plusCounter}>10더하기!</button>
      <button onClick={minusCounter}>10빼기!</button>
      <button onClick={resetCounter}>리셋!</button>
    </div>
  );
};

export default App;
