import React, { useState,useContext } from 'react'
import FinderContext from '../../context/FinderContext'




function UserSearch() {
  const {getNews,items,text,handleChange,handleSubmit} = useContext(FinderContext)


  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="input-group mb-3 py-3">
  <input type="text" value={text} onChange={handleChange} className="form-control search-box py-2" placeholder="Search News" aria-label="Search" aria-describedby="button-addon2"/>
  <button className="btn search-btn" type="submit" id="button-addon2">Search</button>
</div>

    </form>
    
    </>
  )
}

export default UserSearch