import Menu from './components/menu/Menu.jsx'
import newMenu from './components/newMenu/newMenu.jsx'
import TripList from './components/tripList/TripList.jsx';



function App() {

  const name = "나별!!!";
  function sayHello(){
    alert("Hello");
  
  }
  function plus (a, b) {
    return a.map(x => x * b)
  }

  const backblack = {backgroundColor: "black", color: "white"};

  const arr = [1,2,3,4,5,6,7,8,9,10];

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let list = [
    { no: 1, area: "대전", visited: false },
    { no: 2, area: "부산", visited: true },
    { no: 3, area: "목포", visited: false },
    { no: 4, area: "제주도", visited: false },
];

  return (
    <div>
      <newMenu />
      <Menu/>
      {plus(arr,2)}
      <h1 style={{}}>안녕 {name}이의 첫 리액트 프로젝트</h1>
      <p>HaHAHa</p>
      <input type="radio" checked></input>
        <div style= {backblack}>
          <h1 style={{color:'red'}}>년 : {year} </h1>
        <h1>월/일 : {month}/{day}</h1>
        <h1>시간 : {hours}시 {minutes}분 {seconds}초</h1>
        </div>

        <TripList />

        <h1>반갑습니다~</h1>
    </div>
  );
}

export default App;
