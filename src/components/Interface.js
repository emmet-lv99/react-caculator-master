import React from 'react'

const Interface = props => {
  const onClickNumber = num => {
    if (props.emitInterfaceVal) props.emitInterfaceVal(num)
  }
  const onClickOperator = op => {
    if (props.emitInterfaceOp) props.emitInterfaceOp(op)
  }

  const onClickEq = () => {
    if (props.emitInterfaceEq) props.emitInterfaceEq()
  }
  return (
    <>
      <div>
        <div className="interface-row">
          <button className="interface-item">C</button>
          <button className="interface-item">.</button>
          <button className="interface-item">←</button>
          <button
            onClick={() => {
              onClickOperator('÷')
            }}
            className="interface-item interface-item-operator"
          >
            ÷
          </button>
        </div>
        <div className="interface-row">
          <button
            onClick={() => {
              onClickNumber(7)
            }}
            className="interface-item"
          >
            7
          </button>
          <button
            onClick={() => {
              onClickNumber(8)
            }}
            className="interface-item"
          >
            8
          </button>
          <button
            onClick={() => {
              onClickNumber(9)
            }}
            className="interface-item"
          >
            9
          </button>
          <button
            onClick={() => {
              onClickOperator('×')
            }}
            className="interface-item interface-item-operator"
          >
            ×
          </button>
        </div>
        <div className="interface-row">
          <button
            onClick={() => {
              onClickNumber(4)
            }}
            className="interface-item"
          >
            4
          </button>
          <button
            onClick={() => {
              onClickNumber(5)
            }}
            className="interface-item"
          >
            5
          </button>
          <button
            onClick={() => {
              onClickNumber(6)
            }}
            className="interface-item"
          >
            6
          </button>
          <button
            onClick={() => {
              onClickOperator('-')
            }}
            className="interface-item interface-item-operator"
          >
            －
          </button>
        </div>
        <div className="interface-row">
          <button
            onClick={() => {
              onClickNumber(1)
            }}
            className="interface-item"
          >
            1
          </button>
          <button
            onClick={() => {
              onClickNumber(2)
            }}
            className="interface-item"
          >
            2
          </button>
          <button
            onClick={() => {
              onClickNumber(3)
            }}
            className="interface-item"
          >
            3
          </button>
          <button
            onClick={() => {
              onClickOperator('+')
            }}
            className="interface-item interface-item-operator"
          >
            ＋
          </button>
        </div>
        <div className="interface-row">
          <button
            onClick={() => {
              onClickNumber(0)
            }}
            className="interface-item"
          >
            0
          </button>
          <button
            onClick={() => {
              onClickEq()
            }}
            className="interface-item"
          >
            ＝
          </button>
        </div>
      </div>
    </>
  )
}

export default Interface
