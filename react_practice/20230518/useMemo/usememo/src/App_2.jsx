import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function App_2() {
    const inputName = useRef(null)
    const inputId = useRef(null)
    const [userInfo, setUserInfo] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    function handleInputName (e) {
        console.log(e);
        setName(e.target.value)
        console.log('랜더링 - 1');
    }

    function handleInputId(e) {
        console.log(e);
        setId(e.target.value)
        console.log('랜더링 - 2');
    }

    function handleSubmit(e) {
        e.preventDefalut()
        const newInfo = [...userInfo, {name, id}]
        inputName.current.value = ''
        inputId.current.value = ''
        inputName.current.value = ''
        inputName.current.focus()
        setUserInfo(newInfo)
        console.log('랜더링 - 3');
    }

    function getNum (li) {
        return li.length;
    }

    const n = useMemo(() => {
        getNum(userInfo)
    }, [userInfo])

  return (
    <>
    <form>
        <input 
            type="text" 
            placeholder='이름을 입력하세요.'
            onChange={handleInputName}
            ref={inputName}
        />
        <input 
            type="text" 
            placeholder='아이디를 입력하세요.'
            onChange={handleInputId}
            ref={inputId}
        />
    </form>
        <ul>
            {
                userInfo.map((value, index) => {(
                    <li key={index}>
                        <h3>이름 : {value.name}</h3>
                        <strong>아이디 : {value.id}</strong>
                    </li>
                )})
            }
        </ul>

        <button onClick={handleSubmit}>회원 명부 작성</button>


        <p>현재 회원 수 : {getNum(userInfo)}</p>
    </>
  )
}

!use