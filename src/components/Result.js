import React from 'react'
import '../Calculator.css'

const Result = props => {
  return (
    <>
      <div className="result">{props.result}</div>
    </>
  )
}

export default Result
