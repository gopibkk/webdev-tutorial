import { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    name === 'username'
      ? setUsername(value)
      : setPassword(value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleOnChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleOnChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </>
  );
}

export default Login;
