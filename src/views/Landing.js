import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
      <header>
        <Header pageName="Landing" />
      </header>
      <main>
        <p>랜딩입니다.</p>
        <Link to="/main">메인으로 이동</Link>
      </main>
    </>
  )
}

export default Landing
