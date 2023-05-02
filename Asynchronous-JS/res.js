// synchronous code
console.log("Hello World1");
console.log("Hello World2");
console.log("Hello World2");

// Asynchronous code

setTimeout(() => {
  console.log("Hello World1");
})

console.log("Hello World2");
console.log("Hello World2");

// send request for server to get data this will take time
// get the info about the weather from external source if it is not in your data

getTheData(); //this will take time depending on the site speed

let data = getTheData(); //returns undefined until data loads
//to solve this issue we need a promise that we will get the data