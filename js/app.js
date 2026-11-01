const items = document.querySelectorAll(".item, .highlight");

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

items.forEach(function (item) {
  item.classList.add("reveal");
  observer.observe(item);
});
/* ===== The section button lights up ===== */
const sections = document.querySelectorAll("main h2[id]");
const links = document.querySelectorAll(".chips a");

const watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      links.forEach(function (link) {
        if (link.getAttribute("href") === "#" + entry.target.id) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, { rootMargin: "-20% 0px -70% 0px" });

sections.forEach(function (section) {
  watcher.observe(section);
});