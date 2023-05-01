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


const today = new Date()
const tomorrow = new Date(today.setDate(today.getDate() + 1))

document.getElementById('davaToday').valueAsDate = new Date();

document.getElementById('davaTomorrow').valueAsDate = tomorrow;
