import { Quote } from "../App";

type Props = {
  quotes: Quote[]
}
function HomeMain({ quotes }: Props) {
  return (
    <>
    <h2>Top 20 different Quotes about Politics:</h2>
      <ul className="quotes-list">
        {quotes.map (quote => (<li key = {quote.id}className="quotes-list__item">
          <blockquote>
            <p>
             {quote.text}
            </p>
            <figcaption>— {quote.name}</figcaption>
          </blockquote>
        </li>))}
        
      </ul>
    </>
      
  );
}
export default HomeMain;
