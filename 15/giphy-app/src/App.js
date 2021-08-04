import { useEffect, useState } from 'react';
import axios from 'axios';

import Gif from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    const getTrendingGifs = async () => {
      const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=r9lryrT1sb53mewKob2973KLcJiNh1bO');
      setGifs(response.data.data);
    }
    getTrendingGifs();
  }, []);

  return (
    <>
      <h1>Giphy App!</h1>
      {gifs.map((gif, index) => (
        <Gif
          key={index}
          imageUrl={gif.images.fixed_height.url}
          title={gif.images.title} />
      ))}
      {/* component to capture the search form
      component to render all the trending gifs
      component to render the favorite gifs */}
    </>
  );
}

export default App;
