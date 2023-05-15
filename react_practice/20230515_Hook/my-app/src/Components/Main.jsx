import React from 'react'
import './Main.css'
export default function Main() {
  return (
    <main>
        <h2>React</h2>
        <p>사용자 인터페이스를 만들기 위한 JavaScript 라이버르러리</p>
        <div className='btn-group'>
            <button className='btn-start'>시작하기</button>
            <a href='#' className='btn-go'>자습서 읽어보기 &gt;</a>
        </div>
    </main>
  )
}
