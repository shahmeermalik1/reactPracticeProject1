import React,{useState} from 'react'
import { Link } from 'react-router-dom'





function Navbar1() {
  return (
   <>
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
  <Link to="/" className='navbar-brand'>News Finder</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item">
        <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/products" className='nav-link'>Products</Link>
          
        </li>
        <li className="nav-item">
        <Link to="/about" className='nav-link'>About</Link>
          
        </li>
        <li className="nav-item">
          <Link to="/contact" className='nav-link'>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className='nav-link'>Search</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   
   </>
  )
}

export default Navbar1