import React from "react";
import ToDoItem from "./ToDoItem";
import styled, { css,  createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content:center;
  margin-top:3rem;
`;
export const Button = styled.button`

`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient( to top, skyblue, #E38AAE );
  /* transform: translate(0, -15rem); */
`;
export const ListBox = styled.div`
  border : 0rem solid;
  height: 50rem;
  width: 30rem;
  border-radius: 5rem;
  background-color: #e9ecef;
`
export const title = styled.div`
                 @font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
font-family: 'MaplestoryOTFBold';  
display: flex;
justify-content:center;
font-size: 3rem;
margin-top: 5rem;       
`
export const list = styled.div`
display: flex;
justify-content:center;

`
export const global = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`
