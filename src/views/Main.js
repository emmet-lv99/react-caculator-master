import React, { useState } from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'
import '../Calculator.css'

/*
 *Todo 변수 세팅
 *Todo 인터페이스 숫자 버튼 기능 구현
 *Todo C 초기화 버튼 기능 구현
 *Todo 오퍼레이터 값 받아오기
 *Todo 더하기 기능을 구현해보자
 *Todo 나머지 기능도 구현해보자
 *Todo 삭제 기능을 구현해보자
 */

const Main = () => {
  const [result, setResult] = useState(0)
  const [val1, setVal1] = useState(0)
  const [val2, setVal2] = useState(0)
  const [display, setDisplay] = useState('')
  const [operator, setOperator] = useState('')

  const getNumber = num => {
    if (operator) {
      setVal2(val2 * 10 + num)
    } else {
      setVal1(val1 * 10 + num)
    }
    setDisplay(display + num.toString())
  }

  const makeResult = () => {
    let tmp
    switch (operator) {
      case '＋':
        tmp = val1 + val2
        break
      case '－':
        tmp = val1 - val2
        break
      case '×':
        tmp = val1 * val2
        break
      case '÷':
        tmp = val1 / val2
        break
    }
    setVal1(tmp)
    setVal2(0)
    setResult(tmp)
    setOperator('')
    return tmp
  }

  const getOp = op => {
    if (operator) {
      setDisplay(makeResult() + op)
    } else {
      setDisplay(display + op)
    }
    setOperator(op)
  }

  const getClear = () => {
    setResult(0)
    setVal1(0)
    setVal2(0)
    setDisplay('')
    setOperator('')
  }

  const getEqual = () => {
    if (!val1 && !val2) {
      setResult(0)
    } else {
      setDisplay(makeResult().toString())
    }
  }

  const getDel = () => {
    if (val2 > 0) {
      setVal2(Number(val2.toString().slice(0, -1)))
      setDisplay(display.slice(0, -1))
    } else if (operator) {
      setOperator('')
      setVal2(0)
      setDisplay(display.slice(0, -1))
    } else {
      setVal1(Number(val1.toString().slice(0, -1)))
      console.log(display)
      setDisplay(display.slice(0, -1))
    }
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="calculator-wrapper">
        <Display display={display} />
        <Result result={result} />
        <Interface
          emitNumber={getNumber}
          emitOp={getOp}
          emitDel={getDel}
          emitEqual={getEqual}
          emitClear={getClear}
        />
      </main>
    </>
  )
}

export default Main
