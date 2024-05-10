// export function transitionPage() {
//   if (document.querySelector('body').hasAttribute('data-page-transition')) {
//     const linksAnchors = getAllLinksPage();
//     shellCreation(linksAnchors);
//     const transitioEl = document.querySelector('.transition');
//     if (transitioEl && linksAnchors.length > 0) {
//       setTimeout(() => {
//         transitioEl.classList.remove('is-active');
//       }, 500);

//       linksAnchors.forEach((linkAnchor) => {
//         linkAnchor.addEventListener('click', function (e) {
//           e.preventDefault();
//           let target = e.target.href;

//           transitioEl.classList.add('is-active');

//           setTimeout(() => {
//             window.location.href = target;
//           }, 500);
//         });
//       });
//     }

//     // Получаем все ссылки с заполненным href=".html"
//     // ВАЖНО! На всех страницах должны быть заполнены href всех ссылок
//     // (href="#") Хорошо
//     // (href="") Плохо
//     function getAllLinksPage() {
//       const links = document.querySelectorAll('a');
//       if (links.length > 0) {
//         const hrefLinks = [];
//         links.forEach((el) => {
//           let a = /.html$/;
//           if (el.href.match(a) && el.href !== undefined) {
//             hrefLinks.push(el);
//           }
//         });
//         return hrefLinks;
//       }
//     }

//     // Добавляем всем страницам для которых есть якоря (href=".html") оболочку анимации
//     function shellCreation(anchors) {
//       if (anchors.length > 0) {
//         const div = document.createElement('div');
//         const body = document.querySelector('body'),
//           bodyAtrtribute = body.getAttribute('data-page-transition');
//         anchors.forEach((anchor) => {
//           if (window.location.href == anchor && !body.querySelector('.transition')) {
//             div.classList.add('transition', 'is-active');
//             body.prepend(div);
//             if (bodyAtrtribute == 'right') {
//               div.classList.add('transition-right');
//             } else if (bodyAtrtribute == 'top') {
//               div.classList.add('transition-top');
//             } else if (bodyAtrtribute == 'left') {
//               div.classList.add('transition-left');
//             } else if (bodyAtrtribute == 'bottom') {
//               div.classList.add('transition-bottom');
//             } else {
//               div.classList.add('transition-left');
//             }
//           }
//         });
//       }
//     }
//   }
// }

export function transitionPage() {
  const transitioEl = document.querySelector('.transition');
  if (transitioEl) {
    const linksAnchors = () => {
      const links = document.querySelectorAll('a');
      if (links.length > 0) {
        const hrefLinks = [];
        links.forEach((el) => {
          let a = /.html$/;
          if (el.href.match(a) && el.href !== undefined) {
            hrefLinks.push(el);
          }
        });
        return hrefLinks;
      }
    };

    setTimeout(() => {
      transitioEl.classList.remove('is-active');
    }, 1000);
    linksAnchors.forEach((linkAnchor) => {
      linkAnchor.addEventListener('click', function (e) {
        e.preventDefault();
        let target = e.target.href;
        transitioEl.classList.add('is-active');
        setTimeout(() => {
          //window.location.href = target;
        }, 400);
      });
    });
  }
}
