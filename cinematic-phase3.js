/* Phase 3: pause decorative animation when not visible or when motion is reduced. */
(function () {
  'use strict';
  var stage = document.querySelector('.vinyl-stage');
  if (!stage) return;
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var visible = false;
  function update() {
    stage.classList.toggle('is-playing', visible && !motion.matches && !document.hidden);
  }
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      update();
    }, { threshold: 0.05 });
    observer.observe(stage);
  } else { visible = true; update(); }
  document.addEventListener('visibilitychange', update);
  if (motion.addEventListener) motion.addEventListener('change', update);
  else if (motion.addListener) motion.addListener(update);
})();
