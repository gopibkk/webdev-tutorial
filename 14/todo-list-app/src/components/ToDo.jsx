import { useState, useEffect } from 'react';

const ToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDoText, setNewToDoText] = useState('');

  useEffect(() => {
    document.title = `Num of todos ${toDos.length}`;
  }, [toDos]);

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
        <div className="mb-3">
          <label for="newToDoText" className="form-label">ToDo text</label>
          <input
            type="text"
            className="form-control"
            id="newToDoText"
            aria-describedby="emailHelp"
            name="newToDoText"
            value={newToDoText}
            onChange={onChangeHandler} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {toDos.length <= 0
        ? <p>Add todos to see your list</p>
        : (
          <ul className="list-group">
            {toDos.map((todo, index) => {
              return (
                <li className="list-group-item" key={index}>{todo}</li>
              )
            })}
          </ul>
        )
      }
    </>
  )
}

export default ToDo;
