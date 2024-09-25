import { useState } from "react";
import Btn from "./Btn";
const Converter = () => {
  const [time, setTime] = useState(0);
  const [bool, setBoolen] = useState(false);

  const input = (e) => {
    setTime(e.target.value); // 입력할때마다 값을 넣음
  };
  const reset = () => {
    setTime(0); // 초기화
  };
  const togle = () => {
    reset();
    setBoolen(!bool); // 누를때마다 반대 값으로 바꿈
  };
  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :
        <input
          onChange={input}
          type="number"
          disabled={!bool}
          value={time === 0 ? "" : bool ? time : time * 60}
          placeholder="Minutes"
        />
      </p>
      <p>
        Hours :
        <input
          onChange={input}
          type="number"
          disabled={bool}
          value={time === 0 ? "" : !bool ? time : Math.floor(time / 60)}
          placeholder="Hours"
        />
      </p>
      <Btn click={reset} text="Reset" />
      <Btn
        click={togle}
        text={!bool ? "Hours => Minutes" : "Minutes => Hours"}
      />
      <br />
    </>
  );
};

export default Converter;
