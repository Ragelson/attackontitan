const menuBtn = document.querySelector('.menu-btn1');
const menuNav = document.querySelector('.menu-nav');
// Обработчик клика на кнопку меню
menuBtn.addEventListener('click', () => {
  menuNav.classList.toggle('menu-nav_active');
  menuBtn.classList.toggle('menu-btn1_active');
});

// Обработчик клика вне меню
document.addEventListener('click', (event) => {
  if (!menuNav.contains(event.target) && event.target !== menuBtn) {
    menuNav.classList.remove('menu-nav_active');
    menuBtn.classList.remove('menu-btn1_active');
  }
});

// Обработчик клика на ссылки меню
const menuLinks = menuNav.querySelectorAll('a');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuNav.classList.remove('menu-nav_active');
    menuBtn.classList.remove('menu-btn1_active');
  });
});