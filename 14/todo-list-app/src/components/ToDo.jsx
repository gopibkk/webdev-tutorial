import { useState } from 'react';

const ToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDoText, setNewToDoText] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name === 'newToDoText') {
      setNewToDoText(event.target.value);
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!newToDoText) {
      return;
    }

    setToDos([...toDos, newToDoText]);
    setNewToDoText('');
  }

  return (
    <>
      <h1>Welcome to the todo list application!</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="newToDoText"
          value={newToDoText}
          onChange={onChangeHandler} />
        <button type="submit">Create ToDo!</button>
      </form>
      {toDos.length <= 0
        ? <p>Add todos to see your list</p>
        : (
          <ul>
            {toDos.map((todo, index) => {
              return (
                <li key={index}>{todo}</li>
              )
            })}
          </ul>
        )
      }
    </>
  )
}

export default ToDo;
