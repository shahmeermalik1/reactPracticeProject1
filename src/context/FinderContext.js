import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FinderContext = createContext()




export const FinderProvider = ({children}) => {
    

//this part fetches and renders the headlines on home page load

const [items, setItems] = useState('');


const baseURL = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1853339cd27d44c69a3a883516de2b1a'

const getNews= async () => {
    try {
        const res = await axios.get(baseURL)
        if(res){
            console.log(res.data)
            setItems(res.data)
        }
    } catch (error) {
        console.log(error)
    }


}
    //search ability
    const [text, setText] = useState('')
    let baseURL2 = `https://newsapi.org/v2/everything?q=${text}&apiKey=1853339cd27d44c69a3a883516de2b1a`




    const searchNews= async () => {
        try {
            const res = await axios.get(baseURL2)
            if(res){
                console.log(res.data)
                setItems(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    
    
    }

    const handleChange = (e) => {
        setText(e.target.value)
        
    
    }
const handleSubmit = (e) => {
    e.preventDefault()

    if(text === "") {
        alert('please enter something')
    } else {
        //success
        setText(text)
        console.log(baseURL2)
        searchNews()
        
        
    }

    
    
}





    return <FinderContext.Provider value={{
        getNews,
        items,
        text,
        handleSubmit,
        handleChange,
        searchNews
    }}>
        {children}
    </FinderContext.Provider>

}

export default FinderContext