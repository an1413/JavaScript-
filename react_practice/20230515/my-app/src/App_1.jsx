// import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"

import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'


// const StyleP = createGlobalStyle`
//   p {
//     color: #000;
//     font-weight: 700;
//   }
// `

const ContentDiv = styled.div`
  margin:40px;

`

const ContentH2 = styled.h2`
  color: ${({name}) => (name === 'hello') ? 'blue' : 'red'};
  height:200px;
  width:200px;
  margin: 0 auto;
  text-align: center;
`

const GlobalStyle = createGlobalStyle`
span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`

function App() {
  return (
    <>

      <ContentDiv>
        <ContentH2 name='hello2'>
            my my
        </ContentH2>
      </ContentDiv>
      <p>HihI</p>
      <h1>hello world 1</h1>
      <h2>my my</h2>
      <span>hello world 2</span>
    </>
  );
}

export default App;