const Gif = ({
  imageUrl,
  title,
  removeFavorite,
  saveFavorite,
  id,
}) => {
  const onClickHandler = (gifId) => {
    if (!gifId) return;
    if (removeFavorite !== undefined) {
      removeFavorite(gifId)
    } else {
      saveFavorite(gifId);
    }
  };

  return (
    <img
      src={imageUrl}
      alt={title}
      onClick={() => onClickHandler(id)} />
  );
};

export default Gif;
