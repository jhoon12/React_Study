import React, { useState, Component } from "react";

const Say = ({}) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const [number, setNumber] = useState(0);

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeave = () => setMessage("안녕히가세요!");

  const onChangeColor = (e) => {
    setColor(e.target.dataset.color);
  };

  const changeNumber = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
  };

  return (
    <div>
      {number}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={onChangeColor} data-color="red" style={{ color: "red" }}>
        빨간색
      </button>
      <button
        onClick={onChangeColor}
        data-color="green"
        style={{ color: "green" }}
      >
        초록색
      </button>
      <button
        onClick={onChangeColor}
        data-color="blue"
        style={{ color: "blue" }}
      >
        파란색
      </button>
    </div>
  );
};

export default Say;
