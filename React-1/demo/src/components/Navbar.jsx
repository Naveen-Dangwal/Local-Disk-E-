import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/Context'

const Navbar = () => {
  const counter=useContext(counterContext);
  return (
    <div>
      <button>{counter}</button>
    </div>
  )
}

export default Navbar
