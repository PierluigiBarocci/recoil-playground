import { StyledQuote } from "./Quote.styles";
const Quote = () => {
  const quote = {
    anime: "Naruto",
    character: "Pain",
    quote:
      "Because of the existence of love - sacrifice is born. As well as hate. Then one comprehends... one knows PAIN.",
  };
  return (
    <StyledQuote>
      <p>"{quote.quote}"</p>
      <h4>
        <span className="character">{quote.character}</span> <em>in</em>{" "}
        <span className="anime">{quote.anime}</span>
      </h4>
    </StyledQuote>
  );
};

export default Quote;
