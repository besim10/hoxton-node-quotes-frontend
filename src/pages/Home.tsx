import { Quote } from "../App";
import HomeMain from "../components/HomeMain";

type Props = {
  quotes: Quote[]
}

function Home({quotes}:Props) {
    return (
      <main className="home-main">
    <HomeMain quotes = {quotes}/>
  </main>
  ) 
}
export default Home