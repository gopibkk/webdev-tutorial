import Gif from "./Gif";

const Gifs = ({
  gifs,
  removeFavorite,
  saveFavorite,
}) => {
  return gifs.map((gif) => (
    <Gif
      key={gif.id}
      imageUrl={gif.images.fixed_height.url}
      title={gif.images.title}
      id={gif.id}
      removeFavorite={removeFavorite}
      saveFavorite={saveFavorite} />
  ));
}

export default Gifs
