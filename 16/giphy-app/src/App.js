import { useEffect, useState } from 'react';
import axios from 'axios';

import Gifs from './components/Gifs';
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

  const removeFavorite = (gifId) => {
    const newFavoriteGifs = favoriteGifs.filter(gif => gif.id !== gifId);
    setFavoriteGifs(newFavoriteGifs);
  }

  return (
    <div className="bg-light">
      <div className="container">
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
            <h2>Favorite gifs</h2>
          </div>
        </div>
        {favoriteGifs.length <= 0 ? (
          <div className="row">
            <div className="col">
              <p>Click one of the gifs below to save to your favorites!</p>
            </div>
          </div>
        ) : (
          <Gifs gifs={favoriteGifs} removeFavorite={removeFavorite} />
        )}
        <div className="row">
          <div className="col">
            <h2>Trending or Searched Gifs</h2>
          </div>
        </div>
        <Gifs gifs={gifs} saveFavorite={saveFavorite} />
      </div>
    </div>
  );
}

export default App;
