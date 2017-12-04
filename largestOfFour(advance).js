function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));