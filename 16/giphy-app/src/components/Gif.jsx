const Gif = ({
  imageUrl,
  title,
  saveFavorite,
  id,
}) => {
  const onClickHandler = (gifId) => {
    if (!gifId) return;
    saveFavorite(gifId);
  };

  return (
    <img
      src={imageUrl}
      alt={title}
      onClick={() => onClickHandler(id)} />
  );
};

export default Gif;
