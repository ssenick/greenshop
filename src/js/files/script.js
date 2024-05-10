// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';
import { bodyLockStatus, bodyLockToggle, bodyUnlock, bodyLock } from './functions.js';
//! animation word
function tipeText(target) {
  const element = document.querySelector(target),
    textEl = element.textContent,
    delay = 100;
  element.textContent = '';
  const printText = function (text, elem, delay) {
    if (text.length > 0) {
      elem.innerHTML += text[0];
      setTimeout(function () {
        printText(text.slice(1), elem, delay);
      }, delay);
    }
  };
  printText(textEl, element, delay);
}
// tipeText('.info-main__text');
//=================================
// ! animation filter
function animationFilter() {
  const filters = document.querySelectorAll('[data-filter]');
  if (filters.length > 0) {
    filters.forEach((filter) => {
      moveAnimation(filter);
    });
  }
  function moveAnimation(teg) {
    const target = teg.querySelector('[data-target-move]'),
      links = teg.querySelectorAll('[data-target-link]');
    links.forEach((link) => {
      link.addEventListener('click', (e) => (!e.target.closest('.menu__item') ? e.preventDefault() : null));
      link.addEventListener('mouseenter', mouseenterFunc);
      link.addEventListener('mouseout', () => {
        if (!link.classList.contains('_active') || !link.classList.contains('_tab-active')) {
          links.forEach((element) => {
            if (element.classList.contains('_active') || element.classList.contains('_tab-active')) {
              findOffset(teg, element, target);
            }
          });
        }
      });
      if (link.classList.contains('_active') || link.classList.contains('_tab-active')) {
        setTimeout(() => {
          findOffset(teg, link, target);
        }, 150);
      }
    });

    function mouseenterFunc() {
      links.forEach((link) => {
        if (link.classList.contains('_hover')) {
          link.classList.remove('_hover');
        }
        this.classList.add('_hover');
        findOffset(teg, this, target);
      });
    }
  }
  window.addEventListener('resize', function (e) {
    if (filters.length) {
      filters.forEach((filter) => {
        const target = filter.querySelector('[data-target-move]'),
          links = filter.querySelectorAll('[data-target-link]');
        links.forEach((el) => {
          if (el.classList.contains('_active') || el.classList.contains('_tab-active')) {
            findOffset(filter, el, target);
          }
        });
      });
    }
  });
  function findOffset(mainTag, elLink, objMove) {
    const leftPerent = mainTag.getBoundingClientRect().left,
      width = elLink.getBoundingClientRect().width,
      left = elLink.getBoundingClientRect().left;
    objMove.style.width = `${width + 2}px`;
    objMove.style.left = `${left - leftPerent}px`;
    objMove.style.transform = 'none';
  }
}
animationFilter();

//=================================
// ? event for the whole document

document.addEventListener('click', function (e) {
  const target = e.target;

  // filter menu
  if (target && target.closest('.filter__link')) {
    document.querySelectorAll('.filter__link').forEach((link) => {
      link.classList.remove('_active');
    });
    target.classList.add('_active');
  }

  //filter button in tablet
  const btnFilter = document.querySelector('.header-body-catalog__button'),
    asideCatalog = document.querySelector('.aside-catalog'),
    rangeButton = document.querySelector('.range__button.button');
  if (btnFilter && asideCatalog && rangeButton) {
    if (
      (target && target === btnFilter) ||
      (target && target.closest('.header-body-catalog__button') && !asideCatalog.classList.contains('_active'))
    ) {
      btnFilter.classList.toggle('_active');
      asideCatalog.classList.toggle('_active');
      bodyLockToggle();
    }
    if (target && asideCatalog.classList.contains('_active') && target.closest('.header__icon.icon-menu')) {
      asideCatalog.classList.remove('_active');
      btnFilter.classList.remove('_active');
      setTimeout(function () {
        bodyLock();
      }, 550);
    }
    if (
      (target && asideCatalog.classList.contains('_active') && target.hasAttribute('data-popup')) ||
      (target && asideCatalog.classList.contains('_active') && target.parentNode.hasAttribute('data-popup'))
    ) {
      asideCatalog.classList.remove('_active');
      btnFilter.classList.remove('_active');
      // setTimeout(function () {
      //   bodyLock();
      // }, 550);
    }
    if (
      (target &&
        !target.closest('.header-body-catalog__button') &&
        !target.closest('.aside-catalog') &&
        asideCatalog.classList.contains('_active') &&
        !target.closest('.header__icon.icon-menu')) ||
      (target &&
        asideCatalog.classList.contains('_active') &&
        !target.closest('.header__icon.icon-menu') &&
        btnFilter.classList.contains('_active') &&
        target.closest('.range__button.button'))
    ) {
      console.log('asasdasdasa');
      asideCatalog.classList.remove('_active');
      btnFilter.classList.remove('_active');
      bodyUnlock();
    }
  }

  //button like
  const iconsHeart = document.querySelectorAll('.actions-item__link._icon-heart');
  if (iconsHeart.length) {
    if (target && target.closest('.actions-item__link._icon-heart')) {
      e.preventDefault();
      target.classList.toggle('_active');
    }
  }
});
//=================================

//?form tel
if (document.querySelector('input[type="tel')) {
  document.querySelector('input[type="tel').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^\d.]/g, '').substring(0, 10);
  });
}
//=================================
//? открытие попапа по времени
const intervalOpen = setTimeout(function () {
  if (!localStorage.getItem('about_project')) {
    flsModules.popup.open('#preview');
    localStorage.setItem('about_project', 'true');
  } else {
    showButton();
  }
}, 6000);

document.addEventListener('beforePopupClose', function (e) {
  const currentPopup = e.detail.popup;
  if (currentPopup.hash === '#preview') {
    showButton();
  }
});

function showButton() {
  if (document.querySelector('.about-project')) return;
  const div = document.createElement('div');
  div.setAttribute('data-lp','');
  div.classList.add('about-project');
  div.innerHTML = `
		<button class="about-project__btn"></button>
	`;
  document.querySelector('body').prepend(div);
  div.addEventListener('click', function (e) {
    flsModules.popup.open('#preview');
  });
}
