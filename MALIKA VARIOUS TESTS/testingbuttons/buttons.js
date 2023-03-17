function changeColor(){
    document.getElementById('Me').style.color = 'red'
}
document.getElementById('Me').onclick = changeColor;

document.getElementById('Hi'),addEventListener('click' , function name() {
    document.getElementById('Hi').style.color = 'blue';
}) 
document.getElementById('Hi'),addEventListener('mouseover'  , function name() {
    document.getElementById('Hi').style.color = 'red';
})


let btn1 = document.querySelector('#btn');
btn1.onclick = function(){
    alert('Clicked!');
};



let btn = document.querySelector('#btn2');

btn.addEventListener('click',function(event) {
    alert(event.type); // click
});

btn.addEventListener('click',function(event) {
    alert('Clicked!');
});



let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (){
    alert('BUTTONS THREE')
})

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click',  clicker)
function clicker(){
    alert('clicked')
btn4.removeEventListener('click', clicker)
}

const btn6 = document.querySelector('#btn6');
function alertFunction(){
    alert('CRAZY BUTTONS!');
}
btn6.addEventListener('click', alertFunction);


// JAVASCRIPT FILE
btn7.addEventListener('click', function (e) {
    console.log(e);
  });
  // JAVASCRIPT FILE
// JAVASCRIPT FILE
btn7.addEventListener('click', function (e) {
    console.log(e.target);
  });
  // JAVASCRIPT FILE
btn7.addEventListener('click', function (e) {
    e.target.style.background = 'purple';
  });


// buttons is a node list. It looks and acts much like an array.
const btns = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
btns.forEach(function(btn){
  // and for each one we add a 'click' listener 
    btn.addEventListener('click', function(){
        alert(btn.id);
    });
});









