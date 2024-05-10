import barba from '@barba/core';
import { gsap } from 'gsap';
import { flsModules } from './modules.js';
function pageTransition() {
  var tl = gsap.timeline();

  tl.to('.transition span', {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
  });
  //   tl.to('ul.transition li', {
  //     duration: 0.5,
  //     scaleY: 0,
  //     transformOrigin: 'bottom left',
  //     stagger: 0.1,
  //     delay: 0.1,
  //   });
}

function firsPageAnimation() {
  var tl = gsap.timeline();
  tl.from('.transition span', {
    duration: 0.5,
    scaleY: 1,
    transformOrigin: 'bottom left',
    stagger: 0.2,
    delay: 0.3,
  });
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}
function getHrefLinks() {
  const links = document.querySelectorAll('a');
  const linksPopup = document.querySelectorAll('a');
  if (links.length > 0) {
    const hrefLinks = [[], [], []];
    links.forEach((el) => {
      let a = /.html$/;
      let b = /#$/;
      if (el.href.match(a) && el.href !== undefined && !el.closest('.popup')) {
        hrefLinks[0].push(el);
      }
      if (el.href.match(a) && el.href !== undefined && el.closest('.popup')) {
        hrefLinks[1].push(el);
      }
    });

    return hrefLinks;
  }
}

const linksAnchors = getHrefLinks()[0];
let targetLink;
linksAnchors.forEach((linkAnchor) => {
  linkAnchor.addEventListener('click', function (e) {
    e.preventDefault();
    targetLink = e.target.href;
  });
});
const linksPopup = getHrefLinks()[1];
let linkPopup;
linksPopup.forEach((linkAnchor) => {
  linkAnchor.addEventListener('click', function (e) {
    e.preventDefault();
    linkPopup = e.target.href;
    flsModules.popup.close('#popup');
    barba.go(linkPopup);
  });
});
window.addEventListener('load', function () {
  setTimeout(function () {
    document.documentElement.classList.add('loaded');
    barba.init({
      prevent: ({ el }) => el.hasAttribute && el.hasAttribute('data-tagret-zoom'),
      sync: true,
      transitions: [
        {
          async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            window.location.href = targetLink ? targetLink : linkPopup;

            done();
          },
          async once(data) {
            const done = this.async();
            firsPageAnimation();
            await delay(1500);
            done();
          },
        },
      ],
    });
  }, 0);
});
