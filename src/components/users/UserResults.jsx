import React, { useState } from 'react'
import {useEffect, useContext} from 'react'
import axios from 'axios'
import FinderContext from '../../context/FinderContext'





function UserResults() {
    const {getNews,items} = useContext(FinderContext)
 
    


        useEffect(() => {
        getNews()
    }, [])
    
    

return(
<>
<div className="container-fluid text-center">
    <div className="row  justify-content-center">
        {items && items.articles.map((data,idx) =>(
        
    
        
        <div className="col-4">
        
        <div className="card my-5" style={{width: "18rem"}} key={idx}>
        <img src={data.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.content}</p>
        <a href={data.url} className="btn card-btn">View More</a>
        </div>
        </div>
        </div>
        
    

         ))}


    </div>
</div>


</>


)


  }


export default UserResults