import Gifs from "../components/Gifs";

const Favorites = ({
  favoriteGifs,
  removeFavorite,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Favorite gifs</h2>
        </div>
      </div>
      {
        favoriteGifs.length <= 0 ? (
          <div className="row">
            <div className="col">
              <p>Click one of the gifs below to save to your favorites!</p>
            </div>
          </div>
        ) : (
          <Gifs gifs={favoriteGifs} removeFavorite={removeFavorite} />
        )
      }
    </>
  );
};

export default Favorites;
