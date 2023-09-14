import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const cart = useSelector(state => state.product.cart)
  return (
    <div>
      <nav className='d-flex justify-content-between align-items-center p-3 '>
      <h3>My Ecom</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/cart'>Cart({cart.length})</Link>
      </div>
      </nav>
    </div>
  )
}

export default Header