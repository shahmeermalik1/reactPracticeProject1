import React from 'react'
import { Link } from 'react-router-dom'



function Button({children, type,  buttonStyle}) {
  return (
        <>
        <Link to='/'>
            <button className={buttonStyle}  type={type}>
            {children}
            </button>
        </Link>
        </>
  )
}

export default Button