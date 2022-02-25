import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SmallQuote from "../../components/SmallQuote/SmallQuote";
import { StyledAnimePage } from "./Anime.styles";

const Animepage = () => {
  const param = useParams();
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (param?.name) {
      setLoading(true);
      const fetchAnimeQuotes = async () => {
        try {
          const res = await axios.get(
            `https://animechan.vercel.app/api/quotes/anime?title=${param?.name}`
          );
          setQuotes(res?.data);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
      fetchAnimeQuotes();
    }
  }, [param]);

  return (
    <StyledAnimePage>
      <h2>Quotes from {param?.name}</h2>
      <Link to="/">Go back</Link>
      <div className="grid">
        {loading ? (
          <p>Loading...</p>
        ) : quotes?.length ? (
          quotes?.map((quote, index) => (
            <div key={quote?.quote + index} className="anime">
              <SmallQuote
                anime={quote?.anime}
                character={quote?.character}
                quote={quote?.quote}
              />
            </div>
          ))
        ) : (
          <p className="nodata">No Quote found 😞</p>
        )}
      </div>
    </StyledAnimePage>
  );
};

export default Animepage;
