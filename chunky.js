function chunk(arr, size) {
    var res = [];
    for (var i = 0; i < arr.length; i+= size); {
        res.push(arr.slice(i, i + size));
    }
    return res;
}
// var arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var chunkedArray = chunk(arrayToChunk, 3);
// console.log(chunkedArray);