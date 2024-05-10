const dataFilter = document.querySelectorAll('[data-f]');
if (dataFilter.length > 0) {
  const filterItems = document.querySelectorAll('[data-f-item]');
  const filterParentItems = document.querySelector('[data-f-items]');

  //! Набор функциий
  // 1) получить цену
  function getPrice(selector) {
    //  const price = selector.querySelector('.item-catalog__price').textContent,
    //    position = price.indexOf(' '),
    //    numberPrice = parseInt(price.slice(1, position));
    //  return numberPrice;
    const price = parseInt(selector.querySelector('.item-catalog__price').textContent.replace('$', '').replace(/\s+/g, ''));
    return price;
  }

  // 2) Функция анимации карточек
  function animationItems(parentTargetItems, targetItem, atribut, classToggle) {
    setTimeout(() => {
      targetItem.style.display = 'block';
    }, 500);
    if (targetItem.getAttribute('data-f-item') !== atribut && atribut !== 'all') {
      parentTargetItems.classList.add(classToggle);
      setTimeout(() => {
        targetItem.style.display = 'none';
      }, 500);
      setTimeout(() => {
        parentTargetItems.classList.remove(classToggle);
      }, 550);
    } else {
      parentTargetItems.classList.add(classToggle);
      setTimeout(() => {
        targetItem.style.display = 'block';
      }, 500);
      setTimeout(() => {
        parentTargetItems.classList.remove(classToggle);
      }, 550);
    }
  }

  // 3) Все карточки при загрузке
  function getItemsDefailt(items) {
    const allElements = {};
    items.forEach((element, index) => {
      allElements[index] = { element: element };
    });
    return allElements;
  }
  getItemsDefailt(filterItems);

  // 4) Сортировка по цене H
  function sortPriceH(parent, items, classToggle) {
    parent.classList.add(classToggle);
    setTimeout(() => {
      const SortElements = {};
      items.forEach((element, index) => {
        const itemValue = getPrice(element);
        SortElements[itemValue] = { element: element, index: index };
      });
      const keys = Object.keys(SortElements);
      const compareNumeric = (a, b) => {
        return parseInt(b) - parseInt(a);
      };
      keys.sort(compareNumeric);
      keys.map(function (key) {
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
      });
    }, 500);
    setTimeout(() => {
      parent.classList.remove(classToggle);
    }, 550);
  }

  // 5) Сортировка по цене L
  function sortPriceLow(parent, items, classToggle) {
    parent.classList.add(classToggle);
    setTimeout(() => {
      const SortElements = {};
      items.forEach((element, index) => {
        const itemValue = getPrice(element);
        SortElements[itemValue] = { element: element, index: index };
      });
      const keys = Object.keys(SortElements);

      keys.map(function (key) {
        parent.insertAdjacentElement('beforeend', SortElements[key]['element']);
      });
    }, 500);
    setTimeout(() => {
      parent.classList.remove(classToggle);
    }, 550);
  }

  // 6) Сортировка по цене Default
  function sortPriceDefault(parent, classToggle) {
    parent.classList.add(classToggle);
    setTimeout(() => {
      const keys = Object.keys(getItemsDefailt(filterItems));
      keys.map(function (key) {
        parent.insertAdjacentElement('beforeend', getItemsDefailt(filterItems)[key]['element']);
      });
    }, 500);
    setTimeout(() => {
      parent.classList.remove(classToggle);
    }, 550);
  }
  // 7) Сортировка по цене Pop
  function sortPricePop(parent, classToggle) {
    parent.classList.add(classToggle);
    setTimeout(() => {
      const keys = Object.keys(getItemsDefailt(filterItems));
      keys.map(function (key) {
        parent.insertAdjacentElement('afterbegin', getItemsDefailt(filterItems)[key]['element']);
      });
    }, 500);
    setTimeout(() => {
      parent.classList.remove(classToggle);
    }, 550);
  }
  //! Cекция фильтрации
  dataFilter.forEach((filter) => {
    const selectFilter = filter.querySelector('[data-f-select]');

    // all, New, Sale
    filter.addEventListener('click', function (e) {
      const target = e.target;
      if (target && !target.hasAttribute('data-f-categoria')) return false;

      let filterClass = target.getAttribute('data-f-categoria');

      // Запуск анимации при сортировки по (all, New, Sale)
      filterItems.forEach((filterItem) => {
        animationItems(filterParentItems, filterItem, filterClass, 'animation-filter');
      });
    });

    // Cекция фильтрации с select по ценам
    if (selectFilter) {
      // условия запуска функции при изминении select
      document.addEventListener('selectCallback', function (e) {
        const currentSelect = e.detail.select.options.selectedIndex;
        if (currentSelect === 0) {
          sortPriceDefault(filterParentItems, 'animation-filter');
        } else if (currentSelect === 1) {
          sortPricePop(filterParentItems, 'animation-filter');
        } else if (currentSelect === 2) {
          sortPriceLow(filterParentItems, filterItems, 'animation-filter');
        } else if (currentSelect === 3) {
          sortPriceH(filterParentItems, filterItems, 'animation-filter');
        }
      });
    }
  });
}
