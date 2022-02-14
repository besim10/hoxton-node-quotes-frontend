import { Link } from "react-router-dom";
import { Quote } from "../App";

type Props = {
  quotes: Quote[]
}
function HomeMain({ quotes }: Props) {
  return (
    <>
    <h2>Top 20 different Quotes about Politics:</h2>
      <ul className="quotes-list">
        {quotes.map (quote =>
          (
            <Link to ={`/quotes/${quote?.id}`} key = {quote.id}>
              <li  className="quotes-list__item">
            <blockquote>
              <p>
              {quote.text}
              </p>
              <figcaption>— {quote.firstName} {quote.lastName}</figcaption>
            </blockquote>
        </li>  
        </Link>))}
      </ul>
    </>
      
  );
}
export default HomeMain;
