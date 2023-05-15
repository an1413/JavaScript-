import { useState } from "react";
import User from "../App";


function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if(id ==='') {
      alert('아이디를 입력하지 않았습니다.')
    }
    if(pw ==='') {
      alert('비밀번호를 입력하지 않았습니다.')
    }

    
    // alert(`id: ${id}, pw: ${pw}`);

    alert('로그인 되었습니다.')
    User['login'] = true;
  };

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };


  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : 
				<input type="text" onChange={handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}


export default Login;