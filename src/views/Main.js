import React, { useState } from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'
import '../Calculator.css'

/*Todo 변수 구조 세팅
 *Todo interface에서 버튼 별로 값 넘겨 받기
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
  }
  const emitInterfaceOp = op => {
    setDisplay(display + op)
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
        />
      </main>
    </>
  )
}

export default Main
