import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'
import Main from './views/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
