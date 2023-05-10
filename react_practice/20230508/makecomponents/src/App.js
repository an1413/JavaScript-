import  React, {useState} from 'react';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
// import './App.css';


function App() {
  let User = {
    login:false,
    id:'an1413@naver.com',
    nickname:'star'
  }

  return (
  <div>
    {User.login? <Homepage/> : <Login/> };
  </div>
  )


}
export default App;
