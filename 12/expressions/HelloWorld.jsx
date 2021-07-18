const myName = 'Anthony';

const listBooks = (
  <ul>
    <li>A Game of Thrones</li>
    <li>A Clash of Kings</li>
    <li>A Storm of Swords</li>
    <li>A Feast for Crows</li>
    <li>A Dance with Dragons</li>
  </ul>
);

const add = (x, y) => x + y;

const HelloWorld = () => (
  <>
    <div>
      Hello World!
    </div>
    <div>1 + 1 = {1 + 1}</div>
    <p>My name is {myName}</p>
    {listBooks}
    <div>Let's add with a function this time, 1 + 2 = {add(1, 2)}</div>
  </>
);

export default HelloWorld;
