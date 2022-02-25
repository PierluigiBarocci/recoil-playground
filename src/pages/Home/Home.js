import { useRecoilValue } from "recoil";
import AnimePill from "../../components/AnimePill/AnimePill";
import Pagination from "../../components/Pagination/Pagination";
import Quote from "../../components/Quote/Quote";
import { slicedAnimeTitles, animeTitles } from "../../store";
import { StyledHomePage } from "./Home.styles";

const Homepage = () => {
  // useRecoilValue get only the state value
  const animes = useRecoilValue(animeTitles);
  const slicedAnimes = useRecoilValue(slicedAnimeTitles);
  const colors = ["#FAE1DA", "#E8C6AD", "#F2E2ED", "#D6EBE4", "#BFDCD0"];

  const generateColor = () => {
    const randNum = Math.floor(Math.random() * 5);
    return colors[randNum];
  };

  return (
    <StyledHomePage>
      <header>
        <h2>Anime Quote Generator</h2>
      </header>
      <main>
        <Quote />
        <div className="animes">
          <h3>All Animes</h3>
          {animes?.length ? (
            <p>Click on any anime to see a quote from it</p>
          ) : null}
          <div className="flex">
            {animes?.length ? (
              slicedAnimes?.map(anime => (
                <div key={anime} style={{ margin: "0 1.3rem 1.3rem 0" }}>
                  <AnimePill anime={anime} color={generateColor()} />
                </div>
              ))
            ) : (
              <p className="nodata">No anime found 😞 </p>
            )}
          </div>
          {animes?.length > 50 ? (
            <div className="pagination">
              <Pagination listLength={animes?.length} />
            </div>
          ) : null}
        </div>
      </main>
    </StyledHomePage>
  );
};

export default Homepage;
