import React from 'react'

const Interface = props => {
  const onClickNum = num => {
    if (props.emitNumber) props.emitNumber(num)
  }

  const onClickClear = () => {
    if (props.emitClear) props.emitClear()
  }

  const onClickOperator = op => {
    if (props.emitOp) props.emitOp(op)
  }

  const onClickEqual = () => {
    if (props.emitEqual) props.emitEqual()
  }

  return (
    <>
      <div>
        <div className="interface-row">
          <button onClick={() => onClickClear()} className="interface-item">
            C
          </button>
          <button className="interface-item">.</button>
          <button className="interface-item">←</button>
          <button
            onClick={() => onClickOperator('÷')}
            className="interface-item interface-item-operator"
          >
            ÷
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(7)} className="interface-item">
            7
          </button>
          <button onClick={() => onClickNum(8)} className="interface-item">
            8
          </button>
          <button onClick={() => onClickNum(9)} className="interface-item">
            9
          </button>
          <button
            onClick={() => onClickOperator('×')}
            className="interface-item interface-item-operator"
          >
            ×
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(4)} className="interface-item">
            4
          </button>
          <button onClick={() => onClickNum(5)} className="interface-item">
            5
          </button>
          <button onClick={() => onClickNum(6)} className="interface-item">
            6
          </button>
          <button
            onClick={() => onClickOperator('－')}
            className="interface-item interface-item-operator"
          >
            －
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(1)} className="interface-item">
            1
          </button>
          <button onClick={() => onClickNum(2)} className="interface-item">
            2
          </button>
          <button onClick={() => onClickNum(3)} className="interface-item">
            3
          </button>
          <button
            onClick={() => onClickOperator('＋')}
            className="interface-item interface-item-operator"
          >
            ＋
          </button>
        </div>
        <div className="interface-row">
          <button onClick={() => onClickNum(0)} className="interface-item">
            0
          </button>
          <button onClick={() => onClickEqual()} className="interface-item">
            ＝
          </button>
        </div>
      </div>
    </>
  )
}

export default Interface
