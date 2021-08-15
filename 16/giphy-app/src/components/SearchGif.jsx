import { useState } from 'react';

const SearchGif = ({
  searchGifs
}) => {
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (event) => {
    setSearchText(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    searchGifs(searchText);
    setSearchText('');
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label for="searchGiphyText">Giphy API search term</label>
          <input
            type="text"
            className="form-control"
            id="searchGiphyText"
            placeholder="Text"
            value={searchText}
            onChange={onChangeHandler} />
        </div>
      </form>
    </div>
  )
}

export default SearchGif;
