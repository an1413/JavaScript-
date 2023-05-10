// import React from 'react';
// import { useState } from 'react';
// import 수상이력 from './Components/수상이력';
// import 개인정보 from './Components/개인정보';
// import 자격증과관련경험 from './Components/자격증과관련경험';


// function Resume(props) {
//   const [like, setLike] = useState(0);
  
//   function clickLike() {
//     setLike(like +1);
//     console.log(like);
//   }

//   const myColor = props.Color;
//   const styleColor = {color:myColor};

//   return (
//     <div style={{border:"solid 1px", width: "500px"}}>
//     <h1>{props.name}자기소개서</h1>
//     <button onClick={clickLike}>like {like} </button>

//     </div>
//   )
// }

// function App() {
//   const [like, setLike] = useState(0);
//   let heart = like > 0 ? '❤️' : '';

//   const [hate , sethate] = useState(0);
//   let bad = hate > 0 ? '🤣': '';

//   function setHate() {
//     sethate(like-1);
//     console.log(hate);
//   }


//   function clickLike() {
//     setLike(like +1);
//     console.log(like);
//   }

//   return (
  
//     <div className="App">
//       <h1>Hello</h1>
//       <button onClick={clickLike}>like{like}</button>
//       <button onClick={setHate}>Hate{hate}</button>
//       <span>{heart}</span>
//       <span>{bad}</span>

//     </div>
//   );
// }
// export default App;



// function App() {
//   const productList = {
//     products: [
//       {
//         title: "개발자 무릎 담요",
//         price: 17500,
//         id: 101,
//       },
//       {
//         title: "Hack Your Life 개발자 노트북 파우치",
//         price: 29000,
//         id: 102,
//       },
//       {
//         title: "우당탕탕 라이켓의 실험실 스티커북",
//         price: 29000,
//         id: 103,
//       },
//       {
//         title: "버그를 Java라 버그잡는 개리씨 키링",
//         price: 29000,
//         id: 104,
//       },
//     ],
//   };

//   return(
//     <>
//     {productList.products.map((item, idx) => {
//       <li key={item.id} style={{listStyle:"none",}}>
//         <h2>
//           {idx + 1} {item.title}
//         </h2>
//         <span>{`${item.price}원`}</span>
//       </li>
//     })}
//     </>
//   )

// }
// import About from './Components/About';
// import Product from './Components/Product';
// import Contact from './Components/Contact';

// const Container = ({listName}) => {
//   if (listName === 'about') {
//     return <About/>
//   } else if(listName === 'product') {
//     return <Product/>
//   } else if (listName === 'contact') {
//     return <Contact/>
//   }
// }


// function App () {
//   const [listName, setListName] = useState("about"); // listName 변수를 사용할거야
//   const checkId = (e) => {   // checkId함수 할거야 
//     setListName(e.target.id);
//   }
  

  
//   return (
//     <>
//       <nav>
//         <ul>
//           <li id='about' onClick={checkId} style={listName==='about' ? {color:"red"} : {color:"black"}}>About</li>
//           <li id='product' onClick={checkId} style={listName==='product' ? {color:"red"} : {color:"black"}}>Product</li>
//           <li id= 'contact' onClick={checkId} style={listName==='contact' ? {color:"red"} : {color:"black"}}>Contact</li>
//         </ul>
//       </nav>
//       <Container listName={listName}/>
//     </>
//   )

// }


import { useState } from 'react';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';


const Container = ({listName}) => {
  if(listName === 'about') {
    return <About/>
  } else if (listName === 'product') {
    return <Product/>
  } else if (listName === 'contact') {
    return <Contact/>
  }
};

const App = () => {
  const [listName, setListName] = useState("about");
  const setId = (e) => {
    setListName(e.target.id);
  }

  return (
    <>
      <nav>
        <ul>
          <li id='about' onClick={setId} style={listName==='about' ? {color:"red"} : {color:"black"}}>About</li>
          <li id='product' onClick={setId} style={listName==='product' ? {color:"red"} : {color:"black"}}>Product</li>
          <li id='contact' onClick={setId} style={listName==='contact' ? {color:"red"} : {color:"black"}}>Contact</li>
        </ul>
      </nav>
      <Container listName={listName}/>
    </>
    
  )
}

export default App;