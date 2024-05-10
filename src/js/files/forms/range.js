// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSlider = document.querySelector('#range');
  if (priceSlider) {
    let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');
    noUiSlider.create(priceSlider, {
      start: [0, 1230],
      connect: true,
      margin: 24,
      range: {
        min: [39],
        max: [1500],
      },
    });
    const limitFieldMin = document.getElementById('rangeLowValue'),
      limitFieldMax = document.getElementById('rangeHightValue');

    priceSlider.noUiSlider.on('update', function (values, handle) {
      (handle ? limitFieldMax : limitFieldMin).innerHTML ='$' + Math.round(values[handle]) ;
    });
    //  const priceStart = document.getElementById('rangeLowValue');
    //  const priceEnd = document.getElementById('rangeHightValue');
    //  priceStart.addEventListener('change', setPriceValues);
    //  priceEnd.addEventListener('change', setPriceValues);

    //  function setPriceValues() {
    //    let priceStartValue;
    //    let priceEndValue;

    //    if (priceStart.value != '') {
    //      priceStartValue = priceStart.value;

    //    }
    //    if (priceEnd.value != '') {
    //      priceEndValue = priceEnd.value;
    // 	   console.log(priceEndValue);
    //    }
    //    priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    //  }
  }
}
rangeInit();
