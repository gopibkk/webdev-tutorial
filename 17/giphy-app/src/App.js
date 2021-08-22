import { useEffect, useState } from 'react';

import API from './utils/API';

import Gifs from './components/Gifs';
import Navbar from './components/Navbar';
import SearchGif from './components/SearchGif';

function App() {
  const [gifs, setGifs] = useState([]);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  useEffect(() => {
    console.log('I only run onload!');

    const getTrendingGifs = async () => {
      const response = await API.getTrendingGifs();
      setGifs(response.data);
    }
    getTrendingGifs();
  }, []);

  useEffect(() => {
    console.log('I run on every state update and onload!');
    console.log(`Trending/searched gifs length: ${gifs.length}`);
  });

  useEffect(() => {
    console.log('I run only on a specific state update and onload');
    console.log(`Favorite gifs length: ${favoriteGifs.length}`);
  }, [favoriteGifs]);

  const searchGifs = async (searchText) => {
    const response = await API.searchGifs(searchText);
    setGifs(response.data);
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
        <Navbar />
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
