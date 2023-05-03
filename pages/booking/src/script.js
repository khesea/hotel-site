//меню в адаптиве
function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.container1__menu').classList.toggle('showMenu');
}

//счетчик в форме
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

//календарь в форме
const today = new Date()
const tomorrow = new Date(today.setDate(today.getDate() + 1))

document.getElementById('davaToday').valueAsDate = new Date();

document.getElementById('davaTomorrow').valueAsDate = tomorrow;

//выпадающий список для первого пункта
const oneParent = document.getElementById('firstParent');
const oneChild  = document.getElementById('firstChild');
const oneArrow = document.getElementById('services__arrow1');

var addListener1 = function () {
  oneChild.style.display = 'flex';
  oneChild.classList.remove('removing__flex');
  oneChild.classList.add('additional__flex');
  oneArrow.classList.toggle('arrow__rotate');
  oneParent.removeEventListener("click", addListener1);
  setTimeout(function () {
    oneParent.addEventListener("click", removeListener1);
  }, 790);
}

var removeListener1 = function () {
  oneChild.classList.add('removing__flex');
  oneArrow.classList.toggle('arrow__rotate');
  oneParent.removeEventListener("click", removeListener1);
  setTimeout(function () {
    oneChild.style.display = 'none';
    oneChild.classList.remove('additional__flex');
    oneParent.addEventListener("click", addListener1);
  }, 790);
}

oneParent.addEventListener("click", addListener1);

//выпадающий список для второго пункта
const twoParent = document.getElementById('secondParent');
const twoChild  = document.getElementById('secondChild');
const twoArrow = document.getElementById('services__arrow2');

var addListener2 = function () {
  twoChild.style.display = 'flex';
  twoChild.classList.remove('removing__flex');
  twoChild.classList.add('additional__flex');
  twoArrow.classList.toggle('arrow__rotate');
  twoParent.removeEventListener("click", addListener2);
  setTimeout(function () {
    twoParent.addEventListener("click", removeListener2);
  }, 790);
}

var removeListener2 = function () {
  twoChild.classList.add('removing__flex');
  twoArrow.classList.toggle('arrow__rotate');
  twoParent.removeEventListener("click", removeListener2);
  setTimeout(function () {
    twoChild.style.display = 'none';
    twoChild.classList.remove('additional__flex');
    twoParent.addEventListener("click", addListener2);
  }, 790);
}

twoParent.addEventListener("click", addListener2);

//поменять плюс на галочку
//главные плюсы
const firstMainCheckbox = document.getElementById('main-checkbox1');
const secondMainCheckbox = document.getElementById('main-checkbox2');
const thirdMainCheckbox = document.getElementById('main-checkbox3');

firstMainCheckbox.addEventListener("click", (e) => {
  firstMainCheckbox.classList.toggle('additional__checkbox');
  firstMainCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

secondMainCheckbox.addEventListener("click", (e) => {
  secondMainCheckbox.classList.toggle('additional__checkbox');
  secondMainCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

thirdMainCheckbox.addEventListener("click", (e) => {
  thirdMainCheckbox.classList.toggle('additional__checkbox');
  thirdMainCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

//второстепенные плюсы
const firstAddCheckbox = document.getElementById('add-checkbox1');
const secondAddCheckbox = document.getElementById('add-checkbox2');
const thirdAddCheckbox = document.getElementById('add-checkbox3');
const fourthAddCheckbox = document.getElementById('add-checkbox4');
const fifthAddCheckbox = document.getElementById('add-checkbox5');
const sixthAddCheckbox = document.getElementById('add-checkbox6');

firstAddCheckbox.addEventListener("click", (e) => {
  firstAddCheckbox.classList.toggle('additional__checkbox');
  firstAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

secondAddCheckbox.addEventListener("click", (e) => {
  secondAddCheckbox.classList.toggle('additional__checkbox');
  secondAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

thirdAddCheckbox.addEventListener("click", (e) => {
  thirdAddCheckbox.classList.toggle('additional__checkbox');
  thirdAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

fourthAddCheckbox.addEventListener("click", (e) => {
  fourthAddCheckbox.classList.toggle('additional__checkbox');
  fourthAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

fifthAddCheckbox.addEventListener("click", (e) => {
  fifthAddCheckbox.classList.toggle('additional__checkbox');
  fifthAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});

sixthAddCheckbox.addEventListener("click", (e) => {
  sixthAddCheckbox.classList.toggle('additional__checkbox');
  sixthAddCheckbox.classList.toggle('add__checkbox');
  e.stopPropagation();
});
