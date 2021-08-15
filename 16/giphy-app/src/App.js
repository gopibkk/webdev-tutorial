import { useEffect, useState } from 'react';
import axios from 'axios';

import Gif from './components/Gif';
import SearchGif from './components/SearchGif';

function App() {
  const [gifs, setGifs] = useState([]);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  useEffect(() => {
    const getTrendingGifs = async () => {
      const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=r9lryrT1sb53mewKob2973KLcJiNh1bO');
      setGifs(response.data.data);
    }
    getTrendingGifs();
  }, []);

  const searchGifs = async (searchText) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=r9lryrT1sb53mewKob2973KLcJiNh1bO&q=${searchText}`);
    setGifs(response.data.data);
  }

  const saveFavorite = (gifId) => {
    const favGif = gifs.find(gif => gif.id === gifId);
    setFavoriteGifs([...favoriteGifs, favGif]);
  }

  return (
    <>
      <h1>Giphy App!</h1>
      <SearchGif searchGifs={searchGifs} />
      <p>Favorite gifs</p>
      {favoriteGifs.map((gif) => (
        <Gif
          key={gif.id}
          imageUrl={gif.images.fixed_height.url}
          title={gif.images.title} />
      ))}
      <p>Trending or searched gifs</p>
      {gifs.map((gif) => (
        <Gif
          key={gif.id}
          imageUrl={gif.images.fixed_height.url}
          title={gif.images.title}
          id={gif.id}
          saveFavorite={saveFavorite} />
      ))}
      {/* component to capture the search form
      component to render all the trending gifs
      component to render the favorite gifs */}
    </>
  );
}

export default App;
