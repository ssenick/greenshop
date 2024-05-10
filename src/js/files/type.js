import Typed from 'typed.js';
const options = {
  strings: ['PLANET', 'Life'],
  smartBackspace: true, // Default value
  typeSpeed: 150,
  loop: true,
  showCursor: false,
  cursorChar: '|',
  autoInsertCss: true,
  backDelay: 2000,
};

if (document.querySelector('#type span')) {
  new Typed('#type span', options);
}
