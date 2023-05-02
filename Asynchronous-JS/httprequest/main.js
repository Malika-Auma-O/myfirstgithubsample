console.log(test)

function logDataFromServer() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(result){
  return(result.json());
})
.then(function(data){
  return(data.slice(0, 50));
})
.then(function(halfData){
  for (let i = 0; i < halfData.length; i++) {
    document.getElementById("root").innerHTML += "<li>" + array[i].title + "</li>";
  }
  
})
.catch((err) => {
  document.getElementById("root").innerHTML = "<h1>" + "</h1>"
})
}

logDataFromServer();