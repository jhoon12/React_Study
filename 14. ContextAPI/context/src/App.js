import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectColors from './components/SelectColors'
import ColorBox from './components/ColorBox';
import ColorContext, { ColorProvider } from './Context/color';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors/>
          <ColorBox/>
          </div>
        </ColorProvider>
  );
}

export default App;
