import React from 'react';
import Counter from '../components/Counter';
import {useSelector, useDispatch} from 'react-redux';
import {increaseAsync, decreaseAsync } from '../modules/counter';

function CounterContainer() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();
    // increaseAsync();
    const onIncrease = () => {
        // console.log(dispatch(increaseAsync()));
        dispatch(increaseAsync());
    }

    const onDecrease = () => {
        dispatch(decreaseAsync());
    }

    return(
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>
    )
}
export default CounterContainer;