// Your code goes here
document.addEventListener('DOMContentLoaded', changingId);

function changingId(event){
    const text = document.querySelector('#text')
    text.textContent = "This is really cool!";
}