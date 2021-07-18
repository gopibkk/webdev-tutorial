function callbackHell() {
  setTimeout(() => {
    console.log(1);
    setTimeout(() => {
      console.log(2)
      setTimeout(() => {
        console.log(3)
        setTimeout(() => {
          console.log(4);
          setTimeout(() => {
            console.log(5)
            setTimeout(() => {
              console.log(6);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}

callbackHell();

function fun() {
  setTimeout(() => {
    console.log(1);
  }, 500);
  setTimeout(() => {
    console.log(2);
  }, 500);
  setTimeout(() => {
    console.log(3);
  }, 500);
  setTimeout(() => {
    console.log(4);
  }, 500);
  setTimeout(() => {
    console.log(5);
  }, 500);
  setTimeout(() => {
    console.log(6);
  }, 500);
}

// fun();
