import { useState } from 'react';

const ToDo = () => {
  const [toDos, setToDos] = useState([]);

  return (
    <>
      <h1>Welcome to the todo list application!</h1>
      <form>
        <input type="text" />
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
