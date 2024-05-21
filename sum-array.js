var sumArray = function(arr) {
    let sum = 0;
    for (var k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    return sum;
}
var arr = [3, 1, 5, 6];
console.log(sumArray(arr));