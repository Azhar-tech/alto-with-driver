(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    // Close mobile nav after tapping a link
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });

    // Close nav on outside click (mobile)
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (!nav.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- Scroll fade-in animation ---------- */
  var fadeEls = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window && fadeEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: reveal everything immediately
    fadeEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }
})();
