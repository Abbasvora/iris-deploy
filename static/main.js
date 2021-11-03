var sepalLength = document.getElementById("sepalLength");
var value_sepalLength = document.getElementById("value-sepalLength");

var sepalWidth = document.getElementById("sepalWidth");
var value_sepalWidth = document.getElementById("value-sepalWidth");

var petalLength = document.getElementById("petalLength");
var value_petalLength = document.getElementById("value-petalLength");

var petalWidth = document.getElementById("petalWidth");
var value_petalWidth = document.getElementById("value-petalWidth");

value_sepalLength.innerHTML = sepalLength.value;

sepalLength.oninput = function () {
    value_sepalLength.innerHTML = this.value;
}


value_sepalWidth.innerHTML = sepalWidth.value;

sepalWidth.oninput = function () {
    value_sepalWidth.innerHTML = this.value;
}


value_petalLength.innerHTML = petalLength.value;

petalLength.oninput = function () {
    value_petalLength.innerHTML = this.value;
}


value_petalWidth.innerHTML = petalWidth.value;

petalWidth.oninput = function () {
    value_petalWidth.innerHTML = this.value;
}
const button = document.querySelector('.button');
const submit = document.querySelector('.submit');

function toggleClass() {
    this.classList.toggle('active');
}

function addClass() {
    this.classList.add('finished');
}

button.addEventListener('click', toggleClass);
button.addEventListener('transitionend', toggleClass);
button.addEventListener('transitionend', addClass);