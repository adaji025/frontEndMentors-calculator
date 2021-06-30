function del() {
    var value1 =document.getElementById('screen').value
   document.getElementById('screen').value = value1.substr(0, value1.length-1);
}

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var toggle = document.getElementById('circle')

two.addEventListener('click', function(){
    var body = document.querySelector('body');
    body.classList.add('active1');
    toggle.style.marginLeft='36%';
});
one.addEventListener('click', function(){
    var body = document.querySelector('body');
    body.classList.remove('active1');
    body.classList.remove('active2');
});
three.addEventListener('click', function(){
    var body = document.querySelector('body');
    body.classList.add('active2');
    body.classList.remove('active1');
    toggle.style.marginLeft='68%';
    
});