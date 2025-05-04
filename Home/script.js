// Run this on page load and on resize
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('load', setViewportHeight);
  