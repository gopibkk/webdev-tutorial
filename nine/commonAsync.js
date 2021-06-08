document.querySelector('#click').addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = Math.floor(Math.random() * 100000);
  p.style.fontSize = '25px';
  document.body.appendChild(p);
});

fetch('https://frozen-waters-77378.herokuapp.com/https://api.fisenko.net/quotes')
  .then(res => res.json())
  .then(data => {
    const p = document.createElement('p');
    p.textContent = `${data.text} -${data.author}`;
    p.style.fontSize = '25px';
    document.body.appendChild(p);
  });
