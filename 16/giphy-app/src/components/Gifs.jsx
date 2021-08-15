import { useEffect } from "react";

import Gif from "./Gif";

const Gifs = ({
  gifs,
  removeFavorite,
  saveFavorite,
}) => {
  useEffect(() => {
    return () => {
      console.log('I only run when I am removed from the DOM');
    }
  }, []);

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
