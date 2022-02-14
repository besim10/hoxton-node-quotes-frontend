import { useEffect, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Authors from "./pages/Authors";
import Home from "./pages/Home";
import QuoteOfTheDay from "./pages/QuoteOfTheDay";
import QuotesDetail from "./pages/QuotesDetail";
import RandomQuotes from "./pages/RandomQuotes";

export type Quote ={
  id: number
  firstName: string
  lastName: string
  photo: string
  age: number
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
        <Route path ='/quotes' element = {<Home quotes={quotes} />} />
        <Route path ='/quotes/:id' element = {<QuotesDetail />} />
        <Route index element={<Navigate to="/quotes" />} />
        <Route path ='/authors' element = {<Authors />} />
        <Route path ='/random-quotes' element = {<RandomQuotes />} />
        <Route path ='/quote-of-the-day' element = {<QuoteOfTheDay />} />
      </Routes> 
    </div>
  )
}

export default App
