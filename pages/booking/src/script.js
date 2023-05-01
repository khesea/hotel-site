function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.container1__menu').classList.toggle('showMenu');
}
let count = document.getElementById('count');
let digit = 1;

function minus() {
  if (digit > 1) {
    digit--;
    count.textContent = digit;
  }
}

function plus() {
  digit++;
  count.textContent = digit;
}
