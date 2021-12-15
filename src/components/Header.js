import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = props => {
  const navigate = useNavigate()
  const headerStyle = {
    height: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }
  return (
    <>
      <div style={headerStyle}>
        {!props.pageName ? (
          <span onClick={() => navigate(-1)}>뒤로가기</span>
        ) : (
          ''
        )}
        <span>헤더입니다</span>
      </div>
    </>
  )
}

export default Header
