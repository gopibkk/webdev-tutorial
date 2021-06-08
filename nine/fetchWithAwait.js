(async function () {
  const res = await fetch('https://frozen-waters-77378.herokuapp.com/https://api.fisenko.net/quotes');
  const data = await res.json();
  const p = document.createElement('p');
  p.textContent = `${data.text} -${data.author}`;
  p.style.fontSize = '25px';
  document.body.appendChild(p);
})();
