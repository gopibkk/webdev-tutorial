const tasks = [
  'eat',
  'teach',
  'sleep',
];

setTimeout(() => {
  const pTag = document.getElementById('text');
  pTag.innerText = 'Changed!';
  pTag.classList.add('green');

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.textContent = task;
    document.querySelector('#tasks').appendChild(li);
  });
}, 1000);
