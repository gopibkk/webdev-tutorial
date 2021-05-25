const tasks = [
  'eat',
  'teach',
  'sleep',
];

const pTag = document.getElementById('text');

setTimeout(() => {
  pTag.innerText = 'Changed!';
  pTag.classList.add('green');

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    document.querySelector('#tasks').appendChild(li);
  });
}, 1000);

pTag.addEventListener('click', () => {
  console.log('hello!');
});
