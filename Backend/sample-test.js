function sum(a, b) {
  return a + b;
}

function callMyFunction(callback) {
  callback();
}

callMyFunction(() => {
  console.log('Hello World');
});

export { sum, callMyFunction };
