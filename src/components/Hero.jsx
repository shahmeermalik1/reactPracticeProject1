import React from 'react'
import Button from './Button'
import UserSearch from './users/UserSearch'

function Hero() {
  return (
    <div className="container-fluid text-center">
        <div className="row row1">
            <div className="col-4">
                    
            </div>
            <div className="col-4 my-5 py-5">
                <div className="heading">
                    News Finder
                </div>
                <div className="py-2">

                <UserSearch/>
                </div>
                <Button buttonStyle='btn btn2'>SIGN UP!</Button>
            </div>
            <div className="col-4">

            </div>
        </div>
    </div>
  )
}

export default Hero