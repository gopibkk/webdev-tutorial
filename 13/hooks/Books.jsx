import { useState } from 'react'

const Books = ({ author }) => {
  const [timesRead, setTimesRead] = useState(0);

  const increaseCount = () => {
    const newTimesRead = timesRead + 1;
    setTimesRead(newTimesRead);
  }

  return (
    <>
      <p>{author}</p>
      <ul>
        <li>A Game of Thrones</li>
        <li>A Clash of Kings</li>
        <li>A Storm of Swords</li>
      </ul>
      <p>I have read these 3 books {timesRead} times!</p>
      <button onClick={increaseCount}>Increase!</button>
    </>
  );
}

export default Books;
