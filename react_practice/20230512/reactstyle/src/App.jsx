// import './App.css';



// function App() {

//   return (
//     <Hello name="licat"/>
//     <Product />
//   );
// }
import React from "react";
import styled from 'styled-components'

const ContentDiv = styled.div`
  color: ${(props) => (props.name === 'hello' ? 'red' : 'blue')};
  margin: 40px;
  border 1px solid black;
`

function App() {
    const productList = {
    products: [
      {
        title: "개발자 무릎 담요",
        price: 17500,
        id: 101,
      },
      {
        title: "Hack Your Life 개발자 노트북 파우치",
        price: 29000,
        id: 102,
      },
      {
        title: "우당탕탕 라이켓의 실험실 스티커북",
        price: 29000,
        id: 103,
      },
      {
        title: "버그를 Java라 버그잡는 개리씨 키링",
        price: 29000,
        id: 104,
      },
    ],
  };

  return (
    <div>
      <ContentDiv>
      {productList.products.map((v, index) => {
        return (
          <div key={v.id}>
            <strong>{index+1}</strong>
            <h2>{v.title}</h2>
            <p>{v.price}</p>
          </div>
        )
      })}
      </ContentDiv>
    </div>
  )
}

export default App;