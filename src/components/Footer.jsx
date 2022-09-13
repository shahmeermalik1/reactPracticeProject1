import React from 'react'
import { Link } from 'react-router-dom'



function Footer1() {
  return (
    <>
    <footer className=" text-center text-lg-start mt-auto footer">
    <div className="container-fluid g-0 footer-container">
 
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0.2, 0)'}}>
    © 2020 Copyright:
    <Link to='/' className='footer-link'>News Finder</Link>
  </div>
 
    </div>
</footer>
    
</>
  )
}

export default Footer1