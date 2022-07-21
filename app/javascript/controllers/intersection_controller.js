import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  connect() {
    console.log('connected')
    //INTERSECTION OBSERVER API
    const ratio = 0.2;

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: ratio,
    };

    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll(".reveal-right").forEach(function (visible) {
      observer.observe(visible);
    });
    document.querySelectorAll(".reveal-left").forEach(function (visible) {
      observer.observe(visible);
    });
    document.querySelectorAll(".reveal-top").forEach(function (visible) {
      observer.observe(visible);
    });
    document.querySelectorAll(".reveal-bottom").forEach(function (visible) {
      observer.observe(visible);
    });

  }
}
