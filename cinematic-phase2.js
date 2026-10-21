/* dMusik Cinematic Phase 2 — no dependencies, progressive enhancement. */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var targets = Array.prototype.slice.call(document.querySelectorAll('.story-image, .story-copy, .support-feature, .feature-card, .section-heading, .independent-card'));
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    targets.forEach(function (el) { el.classList.add('phase2-reveal'); });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 60px 0px' });
    targets.forEach(function (el) { observer.observe(el); });
    document.documentElement.classList.add('phase2-ready');
  }
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (!finePointer.matches || reduceMotion.matches) return;
  document.querySelectorAll('.story-image').forEach(function (el) {
    el.addEventListener('pointermove', function (event) {
      var rect = el.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width - .5) * 2;
      var y = ((event.clientY - rect.top) / rect.height - .5) * 2;
      el.style.setProperty('--tilt-y', (x * 2.2).toFixed(2) + 'deg');
      el.style.setProperty('--tilt-x', (-y * 1.6).toFixed(2) + 'deg');
    }, { passive: true });
    el.addEventListener('pointerleave', function () {
      el.style.removeProperty('--tilt-y');
      el.style.removeProperty('--tilt-x');
    });
  });
})();
