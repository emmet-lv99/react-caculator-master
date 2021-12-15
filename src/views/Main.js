import React from 'react'
import Header from '../components/Header'
import Display from '../components/Display'
import Result from '../components/Result'
import Interface from '../components/Interface'

const Main = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Display />
        <Result />
        <Interface />
      </main>
    </>
  )
}

export default Main
