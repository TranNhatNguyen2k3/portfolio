const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 5, 3) * 70}ms`;
    observer.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

const panel = document.querySelector(".hero-panel");
if (panel && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  panel.addEventListener("pointermove", (e) => {
    const rect = panel.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    panel.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });

  panel.addEventListener("pointerleave", () => {
    panel.style.transform = "";
  });
}
