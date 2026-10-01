// Lucid Studios — tiny bit of interaction for the static site.
const cards = document.querySelectorAll(".project");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {threshold: .12});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(18px)";
  card.style.transition = "opacity .6s ease, transform .6s ease, border-color .25s";
  observer.observe(card);
});
