import React, { useState, Component } from "react";

const getRandomValue = () => parseInt(Math.random() * 9) + 1;

function App() {
  const [first, firstEdit] = useState(getRandomValue());
  const [last, lastEdit] = useState(getRandomValue());
  const [value, valueEdit] = useState(0);

  const result = () => {
    const s = first * last;
    s === parseInt(value) ? alert("정답") : alert("실패");
  };

  const changeInput = (e) => {
    valueEdit(e.target.value);
  };

  return (
    <div>
      <form onSubmit={result}>
        {first} * {last} =&nbsp;
        <input
          onChange={changeInput}
          value={value}
          type="number"
          min="1"
          max="81"
        />
        &nbsp;&nbsp;&nbsp;
        <button type="submit">정답!</button>
      </form>
    </div>
  );
}

export default App;
