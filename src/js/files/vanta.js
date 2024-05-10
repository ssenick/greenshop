if (document.querySelector('#bg')) {
  VANTA.BIRDS({
    el: '#bg',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    quantity: 2,
    scaleMobile: 1.0,
    backgroundColor: '#ffffff',
    birdSize: 1.1,
    color2: '#46a358',
    color1: '#46a358',
    colorMode: 'lerpGradient',
    backgroundAlpha: 0.1,
  });
}
