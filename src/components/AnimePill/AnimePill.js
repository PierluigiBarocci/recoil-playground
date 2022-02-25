import { Link } from "react-router-dom";
import { StyledPill } from "./AnimePill.styles";

const AnimePill = ({ anime, color = "red" }) => {
  return (
    <StyledPill color={color}>
      <Link to={`/anime/${anime}`}>{anime}</Link>
    </StyledPill>
  );
};

export default AnimePill;
