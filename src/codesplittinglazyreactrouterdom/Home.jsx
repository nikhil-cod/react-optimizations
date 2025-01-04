import { useState, useMemo, useCallback } from "react";
import {Suspense, lazy} from "react";
import UseCallBackChildComponent from "../components/useCallBackChildComponent";
import Memo from "../components/memo";
function Home() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const MyComponentForLazy = lazy(() => import("../components/MyComponentForLazy"));
  const handleCount1 = () => {
    setCount((prevState) => prevState + 1);
  };

  const handleCount2 = () => {
    setCount2((prevState) => prevState + 1);
  };

  const squaredValueofCount2 = () => {
    console.log("Expensive calculation... value of |||| counter 2 ==", count2, " ||||counter1", count);

    return count2 * count2;
  };

  const squaredValueofCount2UseMemo = useMemo(squaredValueofCount2, [count]);

  const memoizedCallback = useCallback(() => {
    console.log('Button clicked!');
    return count2*count2
  },[count2])// Empty dependency array means the function is created only once
  // const squaredValueofCount2UseMemo = squaredValueofCount2();


  return (
    <div className="Home">
      <div>Count 1 : {count}</div>
      <button onClick={handleCount1}>Increase Count 1</button>
      <div>Count 2 : {count2}</div>
      <button onClick={handleCount2}>Increase Count 2</button>
      <div>Use Memo Value squared value of count 2{squaredValueofCount2UseMemo}</div>
      <UseCallBackChildComponent count2={count2}/>
      <div>Usecall back memoised value of count2{memoizedCallback()}</div>
      <Memo count={count} />
     <Suspense fallback={<div>Loading...</div>}>
      <MyComponentForLazy />
    </Suspense>
    </div>
  );
}

export default Home;
