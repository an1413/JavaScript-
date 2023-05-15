import React from 'react'
import Header from '../src/Components/Header'
import './App.css'
import Main from '../src/Components/Main'
import Section from '../src/Components/Contents'
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  /* ${reset}; */
  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor : pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function App() {


  return (
    <>
      <GlobalStyle />
      
    </>


  )
}
