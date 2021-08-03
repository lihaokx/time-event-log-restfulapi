const obj = { result:true, count:42, name: "haoli"};

const myJSON = JSON.stringify(obj);
const objBack = JSON.parse(myJSON);

console.log("obj:    ", obj);
console.log("myJSON: ", myJSON);
console.log("objBack:", objBack);
console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
