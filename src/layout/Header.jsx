import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../pages/CreateOrder/SearchOrder'

const Header = () => {
  return (
    <div>
      Header
      <Link to="/menu">برو به منو</Link>
      <SearchOrder/>

    </div>
  )
}

export default Header