import React from 'react'
import { NavBarStyle } from '../../styles/ProductScreen'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <h1>Welcome to Monteverde Cloud Forest</h1>
      <NavBarStyle>
        <ul>
          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </NavBarStyle>
    </>
  )
}

export default NavBar