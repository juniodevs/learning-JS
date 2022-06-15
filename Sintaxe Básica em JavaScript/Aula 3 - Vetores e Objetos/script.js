// o que são vetores ou arrays

//como declarar um array

// let array = ['string', 1, true];

// console.log (array);

// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]

// console.log (array[0]);
// console.log (array[3]);

// forEach

// array.forEach(function(item, index){console.log(item, index)});
// array.push('novo item');
// console.log (array);

// array.pop();
// console.log(array);

// array.shift()
// console.log (array);

// array.unshift('novo item inicio');
// console.log (array)

// console.log (array.indexOf(true));

// array.splice(0, 3)
// console.log (array)

// let novoarray = array.slice(0, 3);
// console.log (novoarray);

let object = {string: 'string',
number: 1,
boolean: true,
array: ["array"],
objectoInterno: { objectInterno: 'Objeto interno'}};

// console.log (object.boolean);
// console.log (object.objectoInterno);

// var string = object.string;
// console.log(string);

// var arrayinterno = object.array;
// console.log (arrayinterno);

var {string, boolean, objectoInterno} = object;
console.log(string, boolean, object);


