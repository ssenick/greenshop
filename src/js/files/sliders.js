/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, EffectCreative, Autoplay, Controller, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.slider-main__body')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.slider-main__body', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, EffectCreative, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      effect: 'creative',
      creativeEffect: {
        prev: {
          opacity: 0,
          translate: ['-30%', 0, -200],
          scale: 0.6,
        },
        next: {
          opacity: 0.7,
          scale: 1.37,
          translate: ['100%', 0, 200],
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      pagination: {
        el: '.main__pagination.swiper-pagination',
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  let previewSlider;
  if (document.querySelector('.preview-slider__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    previewSlider = new Swiper('.preview-slider__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Controller, Thumbs],
      // observer: true,
      direction: 'vertical',
      // observeParents: true,
      slidesPerView: 4,
      spaceBetween: 16,
      autoHeight: true,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 800,
      slideToClickedSlide: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }
  let mainProduct;
  if (document.querySelector('.main-product-slider__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    mainProduct = new Swiper('.main-product-slider__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [EffectCreative, Controller, Thumbs],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 600,
      effect: 'creative',
      thumbs: {
        swiper: previewSlider,
      },
      creativeEffect: {
        prev: {
          opacity: 0,
          translate: ['-30%', 0, -200],
          scale: 0.6,
        },
        next: {
          opacity: 0.7,
          scale: 1.37,
          translate: ['150%', 0, 200],
        },
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация

      // pagination: {
      //   el: '.main__pagination.swiper-pagination',
      //   clickable: true,
      // },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      // navigation: {
      //   prevEl: '.swiper-button-prev',
      //   nextEl: '.swiper-button-next',
      // },

      // Брейкпоинты
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // События
      on: {},
    });
  }

  if (document.querySelector('.releted-products__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.releted-products__slider', {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 5,
      spaceBetween: 25,
      // autoHeight: true,
      speed: 800,

      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      //preloadImages: false,
      //lazy: true,
      // Пагинация
      pagination: {
        el: '.releted-products__pagination.swiper-pagination',
        clickable: true,
      },
      // Брейкпоинты

      breakpoints: {
        319: {
          slidesPerView: 1.5,
          spaceBetween: 22,
        },
        400: {
          slidesPerView: 1.8,
          spaceBetween: 22,
        },
        500: {
          slidesPerView: 2.5,
          spaceBetween: 22,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 25,
        },
      },

      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
