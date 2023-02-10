// const square = function (x) {
//   return x * x;
// }

// const squareArrow = (x) => {
//   return x * x;
// }

// console.log(squareArrow(9));

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0]
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];

const multiplier = {
  numbers: [1, 2, 3, 5, 6],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply());


