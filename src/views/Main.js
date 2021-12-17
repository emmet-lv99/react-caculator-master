import React, { useState } from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'
import '../Calculator.css'

/*Todo 변수 구조 세팅
 *Todo interface에서 버튼 별로 값 넘겨 받기
 *Todo Display와, Result에 값이 렌더링 되는지 확인
 *Todo ++ -- 되는 문제 해결
 *Todo 오퍼레이터를 눌렀을 때 value1에 값이 저장되도록 한다.
 *Todo 오퍼레이터가 있을 경우 오퍼레이터를 클릭하면 value1과 value2를 연산한다.
 *Todo 가르친다면...?
 *Todo 모든 변수를 초기화 하는 c 를 제일 먼저 구현할 것같다
 *Todo del 기능은 가장 마지막에 구현
 *Todo 키보드 키 이벤트를 구현하려면 display가 input이어야 한다.
 *Todo display에 기호가 제일 먼저 들어왔을 떄 처리
 */

const Main = () => {
  const [result, setResult] = useState(0)
  const [display, setDisplay] = useState('')
  const [operator, setOperator] = useState('')
  const [value1, setValue1] = useState(null)
  const [value2, setValue2] = useState(null)

  const emitInterfaceDel = () => {
    if (value2 !== null && value2 > 0) {
      setValue2(Number(value2.toString().slice(0, -1)))
      setDisplay(display.slice(0, -1))
    } else if (operator) {
      setDisplay(display.slice(0, -1))
      setOperator('')
      setValue2(null)
    } else {
      setValue1(Number(value1.toString().slice(0, -1)))
      setDisplay(display.slice(0, -1))
    }
  }

  const emitInterfaceClear = () => {
    setResult(0)
    setDisplay('')
    setOperator('')
    setValue1(0)
    setValue2(0)
  }
  const emitInterfaceVal = num => {
    setDisplay(display + num.toString())
    if (operator && value1 > 0) {
      setValue2(value2 * 10 + num)
    } else {
      setValue1(value1 * 10 + num)
    }
  }

  const makeResult = () => {
    let tmp
    switch (operator) {
      case '+':
        tmp = value1 + value2
        break
      case '-':
        tmp = value1 - value2
        break
      case '×':
        tmp = value1 * value2
        break
      case '÷':
        tmp = value1 / value2
        break
    }
    setValue1(tmp)
    setValue2(0)
    setResult(tmp)
    setDisplay(tmp.toString())
    setOperator('')
    return tmp
  }

  const emitInterfaceOp = op => {
    if (operator) {
      if (value2 !== null && value2 > 0) {
        makeResult()
        setDisplay(makeResult() + op)
      } else {
        setDisplay(display.slice(0, -1) + op)
      }
    } else {
      if (value1 !== null && value1 > 0) {
        setDisplay(display + op)
        setOperator(op)
      } else {
        window.alert('숫자를 입력해주세요')
      }
    }
  }

  const emitInterfaceEq = () => {
    if (!value1 && !value2) {
      setResult(0)
    } else if (value1 && !value2) {
      setResult(value1)
    } else {
      setResult(makeResult())
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
          emitInterfaceClear={emitInterfaceClear}
          emitInterfaceDel={emitInterfaceDel}
        />
      </main>
    </>
  )
}

export default Main
