import React from 'react'

const Interface = () => {
  return (
    <>
      <div>
        <div className="interface-row">
          <button className="interface-item">C</button>
          <button className="interface-item">.</button>
          <button className="interface-item">←</button>
          <button className="interface-item interface-item-operator">÷</button>
        </div>
        <div className="interface-row">
          <button className="interface-item">7</button>
          <button className="interface-item">8</button>
          <button className="interface-item">9</button>
          <button className="interface-item interface-item-operator">×</button>
        </div>
        <div className="interface-row">
          <button className="interface-item">4</button>
          <button className="interface-item">5</button>
          <button className="interface-item">6</button>
          <button className="interface-item interface-item-operator">－</button>
        </div>
        <div className="interface-row">
          <button className="interface-item">1</button>
          <button className="interface-item">2</button>
          <button className="interface-item">3</button>
          <button className="interface-item interface-item-operator">＋</button>
        </div>
        <div className="interface-row">
          <button className="interface-item">0</button>
          <button className="interface-item">＝</button>
        </div>
      </div>
    </>
  )
}

export default Interface
