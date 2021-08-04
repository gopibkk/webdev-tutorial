const Gif = ({ imageUrl, title }) => {
  return (
    <img src={imageUrl} alt={title} />
  );
};

export default Gif;
