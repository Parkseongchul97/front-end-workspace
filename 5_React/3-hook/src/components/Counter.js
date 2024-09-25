import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0); // 0으로 시작한다
  const updateCheckRef = useRef(false);

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
  console.log("랜더링때 마다");

  // 마운트 초기 들어갈때? 해당 유저의 구독 여부 데이터?
  useEffect(() => {
    console.log("마운트 시점 처음만 나오고 끝");
  }, []);

  // 업데이트 바뀔때마다 해당 유저의 구독 여부 데이터?
  useEffect(() => {
    if (!updateCheckRef.current) {
      // 처음 불러오는 시점에만 false 지정
      updateCheckRef.current = true;
      return;
    } else console.log("count 값이 바뀔때마다");
  }, [count]); // 무엇이 바뀌는 시점인지 명시

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("죽는 시점");
    };
  }, []);

  return (
    <>
      <h1>Total Clicks : {count} </h1>
      <Btn click={setCounter} text="+1" />
      <Btn click={plusCounter} text="+10" />
      <Btn click={minusCounter} text="-10" />
      <Btn click={resetCounter} text="reset!" />
    </>
  );
};

export default Counter;
