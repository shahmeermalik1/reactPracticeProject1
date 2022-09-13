import React from 'react'

function Notfound() {
  return (
    <>
    <div className="container-fluid">
        <div className="row notfoundrow">
            <div className="col m-5">
                <div className="fs-1 ">
                    <p>404 PAGE NOT FOUND</p>
                </div>
                <div className="fs-4 text-muted ">
                    The page you are looking for doesnot exist.
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Notfound