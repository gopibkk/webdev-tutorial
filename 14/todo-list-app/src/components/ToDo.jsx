import { useState } from 'react';

const ToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDoText, setNewToDoText] = useState('');

  const onChangeHandler = (event) => {
    if (event.target.name === 'newToDoText') {
      setNewToDoText(event.target.value);
    }
  }

  return (
    <>
      <h1>Welcome to the todo list application!</h1>
      <form>
        <input
          type="text"
          name="newToDoText"
          value={newToDoText}
          onChange={onChangeHandler} />
      </form>
      {toDos.length <= 0
        ? <p>Add todos to see your list</p>
        : (
          <ul>
            <li>a todo</li>
          </ul>
        )
      }
    </>
  )
}

export default ToDo;
