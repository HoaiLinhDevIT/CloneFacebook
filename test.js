// var courses =  [
//     {
//         name: "javaScript",
//         coin: 680
//     },
//     {
//         name: "Ruby",
//         coin: 500
//     },
//     {
//         name: "React",
//         coin: 0
//     }
// ]
Array.prototype.myFilter = function(cb) {
    var Output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this);
        }
        if(result) {
            Output.push(this[index]);
        }
    }
    return Output
}



// Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); 
// Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); 
// Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); 
// Output: [1, 2, 3, 4]





