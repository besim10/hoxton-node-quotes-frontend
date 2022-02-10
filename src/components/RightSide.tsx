import { Quote } from "../App";

type Props = {
  quotes: Quote[]
}
function RightSide({ quotes }: Props) {
  return (
    <section className="right-side">
      <h2>Top 25 different Quotes about Politics:</h2>
      <ul className="quotes-list">
        {quotes.map (quote => (<li className="quotes-list__item">
          <blockquote>
            <p>
             {quote.text}
            </p>
            <figcaption>— {quote.name}</figcaption>
          </blockquote>
        </li>))}
        
      </ul>
    </section>
  );
}
export default RightSide;
