import axios from "axios";

const API = {
  getTrendingGifs: async () => {
    const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=r9lryrT1sb53mewKob2973KLcJiNh1bO');
    return response.data;
  },
  searchGifs: async (searchText) => {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=r9lryrT1sb53mewKob2973KLcJiNh1bO&q=${searchText}`);
    return response.data;
  }
}

export default API
