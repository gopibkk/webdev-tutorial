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
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="searchText"
        value={searchText}
        onChange={onChangeHandler} />
      <button type="submit">Search!</button>
    </form>
  )
}

export default SearchGif;
