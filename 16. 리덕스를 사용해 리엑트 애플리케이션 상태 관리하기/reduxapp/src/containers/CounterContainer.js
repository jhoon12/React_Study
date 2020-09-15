import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {increase, decrease} from "../modules/counter"
import {bindActionCreators} from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    ></Counter>
  );
};

const mapStateToProps = (state) => ({//현재 스토어의 값
  // number: state.counter.number,
});

const MapDispatchToProps = (dispatch) => ({//store의 내장함수
  // increase: () => {
  //   dispatch(increase());
  // },
  // decrease: () => {
  //   dispatch(decrease());
  // },
});

export default connect(
  state=>({
    number: state.counter.number,
  }),
  {
    increase,
    decrease
  }
)(CounterContainer);// mapStateToProps와 MapDispatchToProps의 반환 값들을 CounterContainer로 전달

