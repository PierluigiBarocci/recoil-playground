import { StyledQuote } from "./SmallQuote.styles";

const SmallQuote = ({ quote, character, anime }) => {
  return (
    <StyledQuote>
      <p>"{quote}"</p>
      <h4>
        <span className="character">{character}</span> <em>in</em>
        <span className="anime">{anime}</span>
      </h4>
    </StyledQuote>
  );
};

export default SmallQuote;
