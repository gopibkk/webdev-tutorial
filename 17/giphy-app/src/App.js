import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import API from './utils/API';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

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
    <Router>
      <div className="bg-light">
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home gifs={gifs} saveFavorite={saveFavorite} searchGifs={searchGifs} />
            </Route>
            <Route exact path="/favorites">
              <Favorites favoriteGifs={favoriteGifs} removeFavorite={removeFavorite} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
