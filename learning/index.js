function createFunction() {
  function multiplyBy2(num) {
    return num * 2
  }
  return multiplyBy2;
}

const secondLabel = createFunction;
const generateFunc = createFunction();
const result = generateFunc(3);