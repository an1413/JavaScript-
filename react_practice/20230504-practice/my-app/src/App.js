
import TripList from './components/tripList/TripList';

function App() {
  const name = 'nastar'

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day  = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return (

      <div>
        <h1 style={{color:'red', backgroundColor:'yellow'}}>안녕 나는 {name}야</h1>

        <div style={{color:'#fff', backgroundColor:'black'}}>
          <h1 style={{color:'red'}}>년 : {year} </h1>
        <h1>월/일: {month}/{day}</h1>
        <h1>시간: {hour}시 {min}분 {sec}초</h1>
        </div>
        <ul style={{listStyle : 'none', padding: '0'}}>
          
        </ul>
        
        <TripList />

      </div>

  );
}

export default App;
