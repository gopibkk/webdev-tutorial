function one() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 500);
  })
}

function two() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 500);
  })
}

function three() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 500);
  })
}

function four() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(4);
      resolve();
    }, 500);
  })
}

function five() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(5);
      resolve();
    }, 500);
  })
}

function six() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(6);
      resolve();
    }, 500);
  })
}

one()
  .then(two)
  .then(three)
  .then(four)
  .then(five)
  .then(six)
  .then(() => console.log('promise.all complete'));

// Promise.all([one(), two(), three(), four(), five(), six()])
//   .then(() => console.log('promise.all complete'));
