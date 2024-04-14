import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'


function App() {
   const [jokes, setjokes] = useState([])
   useEffect(()=>{
      axios.get('/api/jokes')
      .then((res)=> {
        setjokes(res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
   },[])

  return (
    <>
       <h1>fullstack</h1>
       <p>JOKES: {jokes.length}</p>

       {jokes.map((joke, index)=>{
        return <div id={index}>
           <h3 id={index} >{joke.question}</h3>
           <p id={index}>{joke.answer}</p>
        </div>
       })}
    </>
  )
}

export default App
