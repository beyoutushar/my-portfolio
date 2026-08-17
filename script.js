/* =================================================================
   1) TYPEWRITER — types out the role text under your name.
      Edit the ROLE_TEXT string to change what it types.
   ================================================================= */
const ROLE_TEXT = "Electronics & Telecommunication Engineer";
const roleEl = document.getElementById("typedRole");

function typeRole(i = 0) {
  if (!roleEl) return;
  if (i <= ROLE_TEXT.length) {
    roleEl.textContent = ROLE_TEXT.slice(0, i);
    setTimeout(() => typeRole(i + 1), 45);
  }
}
typeRole();

/* =================================================================
   2) SCROLL REVEAL — fades/slides each section in as it enters
      the viewport. Toggled via the .is-visible class in CSS.
   ================================================================= */
const revealTargets = document.querySelectorAll(".section-inner");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

/* =================================================================
   3) FOOTER YEAR — keeps the copyright year current automatically.
   ================================================================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
