import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onDecrease = useCallback(()=>dispatch(decrease), [dispatch]);
  const onIncrease = useCallback(()=>dispatch(increase), [dispatch])
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease} 
    ></Counter>
  );
};
  
export default CounterContainer;