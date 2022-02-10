import { useEffect, useState } from "react"
import LeftSide from './components/LeftSide'
import RightSide from "./components/RightSide"

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
      console.log(quotesFromServer)
    })
  },[])
 
  return (
    <div className="App">
      <LeftSide />
      <RightSide quotes = {quotes}/>
    </div>
  )
}

export default App
