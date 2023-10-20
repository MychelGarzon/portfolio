const buttonToTop = document.querySelector('#backToTop');
const mobileButton = document.querySelector('.mobileView');
const navigationUl = document.querySelector('nav ul');
const menu = document.querySelectorAll('nav ul li a');
const header = document.querySelector('header');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    buttonToTop.style.display = 'block';
  } else {
    buttonToTop.style.display = 'none';
  }
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add('bg');
  } else {
    header.classList.remove('bg');
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobileMenu = () => {
  for (const item of menu) {
    item.addEventListener('click', mobileMenu);
  }
  if (navigationUl.classList.contains('responsive')) {
    navigationUl.classList.remove('responsive');
  } else {
    navigationUl.classList.add('responsive');
  }
};

buttonToTop.addEventListener('click', getToTop);
mobileButton.addEventListener('click', mobileMenu);
