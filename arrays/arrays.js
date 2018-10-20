const zero = 0;

const positiveNumbers = [1, 2, 3];

const negativeNumbers = [-1, -2, -3];

const numbers = positiveNumbers.concat(zero, negativeNumbers);

// console.log(numbers);

const numbers1 = [9, 5, 6, 4, 7, 8, 3];

const isEven = x => {
    return x % 2 === 0 ? true : false;
};

const withEvery = numbers1.every(isEven);

const withForEach = numbers1.forEach(x => console.log(x % 2 === 0));

const withFilter = numbers1.filter(isEven);

// console.log(withEvery);
// console.log(withForEach);
// console.log(withFilter);

const compare = (a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
};

const compareNumbers = (a, b) => a - b;

console.log(numbers1.sort(compareNumbers));

console.log(numbers1.sort(compare));
