import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useState(() => {
    axios.get('/api/jokes').then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
     <h1>chai and code</h1>
     <p>Jokes: {jokes.length}</p>


    {
      jokes.map((jokes, index) => (
        <div key={jokes.id}>
          <h3>{jokes.title}</h3>
          <p>{jokes.content}</p>
        </div>
      ))
    }

    </>
  )
}

export default App
