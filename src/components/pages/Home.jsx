import React from 'react'
import Hero from '../Hero'
import '../../index.css'
import UserResults from '../users/UserResults'


function Home() {
  return (
    <>
    

    
    <Hero/>
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center headlines-txt">
          Headlines
        </div>
      </div>
    </div>
    <UserResults/>
    
    </>
  )
}

export default Home