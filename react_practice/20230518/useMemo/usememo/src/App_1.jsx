import React from 'react'
import { useState, useMemo } from 'react'

const 계산 = () => {
        let result = 0;
        for(let i = 0; i < 10000000; i++) {
            result += i;
        }
        return result;
    }

export default function App_1() {

    // let result = 계산()

    const result = useMemo(() => {
        return 계산()
    }, [])

    const [count, setCount] = useState(0);

    const countUP = () => {
        setCount(count+1);
    }

  return (
    <>
        <div>계산결과 : {result}</div>
        <span>{count}</span>
        <button onClick={countUP}>UP!</button>
    </>
    
  )
}
