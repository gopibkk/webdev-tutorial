const module = (function () {
  const _privateKey = 'superSecret';
  function printPrivateKey() {
    console.log(_privateKey);
  }
  return { printPrivateKey };
})()

module.printPrivateKey();
