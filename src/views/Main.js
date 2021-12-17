import React, { useState } from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'
import '../Calculator.css'

/*Todo 변수 구조 세팅
 *Todo interface에서 버튼 별로 값 넘겨 받기
 *Todo ++ -- 되는 문제 해결
 *Todo 오퍼레이터를 눌렀을 때 value1에 값이 저장되어야 한다.
 *Todo 오퍼레이터가 있을 경우 오퍼레이터를 클릭하면 value1과 value2를 연산한다.
 *
 *
 */

const Main = () => {
  const [result, setResult] = useState(0)
  const [display, setDisplay] = useState('')
  const [operator, setOperator] = useState('')
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)

  const emitInterfaceVal = num => {
    setDisplay(display + num.toString())
    if (operator) {
      setValue2(value2 * 10 + num)
    } else {
      setValue1(value1 * 10 + num)
    }
  }

  const emitInterfaceOp = op => {
    if (operator) {
      if (value2 >= 0) {
        if (operator === '+') {
          setValue1(value1 + value2)
          setValue2(0)
          setResult(value1 + value2)
          setDisplay(value1 + value2 + op)
        }
        if (operator === '-') {
          setValue1(value1 - value2)
          setValue2(0)
          setResult(value1 - value2)
          setDisplay(value1 - value2 + op)
        }
        if (operator === '×') {
          setValue1(value1 * value2)
          setValue2(0)
          setResult(value1 * value2)
          setDisplay(value1 * value2 + op)
        }
        if (operator === '÷') {
          setValue1(value1 / value2)
          setValue2(0)
          setResult(value1 / value2)
          setDisplay(value1 / value2 + op)
        }
      } else {
        setDisplay(display.slice(0, -1) + op)
        setValue2(0)
      }
    } else {
      setDisplay(display + op)
    }
    setOperator(op)
  }

  const emitInterfaceEq = () => {
    if (value2 >= 0) {
      setResult(value1 + value2)
    } else {
      setResult(value1)
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
          emitInterfaceVal={emitInterfaceVal}
          emitInterfaceOp={emitInterfaceOp}
          emitInterfaceEq={emitInterfaceEq}
        />
      </main>
    </>
  )
}

export default Main
