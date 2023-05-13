function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.container1__menu').classList.toggle('showMenu');
}

const theParent = document.querySelector('#theDude');
theParent.addEventListener('click', doSomething);

function doSomething(e) {
  if (e.target != e.currentTarget) {
    let clickedItem = e.target;
    clickedItem.querySelector('.container2__dropContent').classList.add('slideIn');
    clickedItem.querySelector('.moreinfo').style.display = 'none';
    clickedItem.style.display = 'block';
    clickedItem.style.border = 'none';
    clickedItem.style.padding = '21px 24px';
    clickedItem.style.background = '#E9ECE0';
  }
  e.stopPropagation();
}
