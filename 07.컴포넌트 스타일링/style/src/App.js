import React from 'react';
import logo from './logo.svg';
import './App.css';
import StyledComponent from './StyledComponent';
import './SassComponent.scss';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function App() {
  return (
     <StyledComponent/>
  );
}

export default App;
