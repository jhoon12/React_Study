import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Info from './info'
function App() {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <button
        onClick={()=>{setvisible(!visible)}}>
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr/>
        {visible&&<Info/>}
    </div>
  );
}

export default App;
