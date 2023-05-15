import React from 'react'
import './Header.css'

export default function Header() {
  return (
        <>
        <header>
            <nav>
            <h1 className='header-title'>React</h1>
            <ul className='header-list'>
                <li>문서</li>
                <li>자습서</li>
                <li>블로그</li>
                <li>커뮤니티</li>
            </ul>
            <div className='header-function'>
                <input type='submit' placeholder='검색'/>v18.2.0
                <a href="#">Languages</a>
                <a href="#">GitHub</a>
            </div>
            </nav>
        </header>
        </>
  )
}
