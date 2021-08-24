import Gifs from "../components/Gifs";
import SearchGif from "../components/SearchGif";

const Home = ({
  gifs,
  saveFavorite,
  searchGifs,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Giphy App!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SearchGif searchGifs={searchGifs} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Trending or Searched Gifs</h2>
        </div>
      </div>
      <Gifs gifs={gifs} saveFavorite={saveFavorite} />
    </>
  );
};

export default Home;
