import { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import QuoteOfTheDay from "./pages/QuoteOfTheDay";
import RandomQuotes from "./pages/RandomQuotes";

export type Quote ={
  id: number
  name: string
  text: string
}

function App() {
  const [quotes,setQuotes] = useState<Quote[]>([])

  useEffect(()=>{
    fetch('http://localhost:8000/quotes')
    .then(resp => resp.json())
    .then(quotesFromServer => {
      setQuotes(quotesFromServer)
    })
  },[])
 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path ='/' element = {<Home quotes={quotes} />} />
        <Route path ='/home' element = {<Home quotes={quotes} />} />
        <Route index element={<Navigate to="/home" />} />
        <Route path ='/authors' element = {<Authors />} />
        <Route path ='/random-quotes' element = {<RandomQuotes />} />
        <Route path ='/quote-of-the-day' element = {<QuoteOfTheDay />} />
      </Routes> 
    </div>
  )
}

export default App
