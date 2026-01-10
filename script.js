// Mouse parallax for grid
document.addEventListener("mousemove", (e) => {
  const grid = document.querySelector(".bg-grid");
  if (!grid) return;

  const x = (e.clientX / window.innerWidth) * 10;
  const y = (e.clientY / window.innerHeight) * 10;

  grid.style.transform = `translate(${x}px, ${y}px)`;
});

// Auto year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
