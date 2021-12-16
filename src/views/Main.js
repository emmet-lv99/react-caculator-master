import React from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'
import '../Calculator.css'

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="calculator-wrapper">
        <Display />
        <Result />
        <Interface />
      </main>
    </>
  )
}

export default Main
