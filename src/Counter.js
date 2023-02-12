import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./CounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter.count);
  return (
    <main>
      <div>Counter: {count}</div>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </main>
  );
};

export default Counter;
