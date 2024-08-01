

const Increase = document.getElementById("Increase");
const Reset = document.getElementById("Reset");
const Decrease = document.getElementById("Decrease");
const label = document.getElementById("count");
let count = 0;

Increase.onclick = function(){
    count++;
    label.textContent = count;
}
Decrease.onclick = function(){
    count--;
    label.textContent = count;
}
Reset.onclick = function(){
    count = 0;
    label.textContent = count;
}