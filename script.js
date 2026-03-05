// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 700);
});

// Parallax Grid Effect (Mouse & Keyboard)
document.addEventListener("mousemove", (e) => {
  const grid = document.querySelector(".bg-grid");
  if (!grid) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  grid.style.transform = `translate(${x}px, ${y}px)`;
});

// Keyboard navigation for grid effect
document.addEventListener("keydown", (e) => {
  const grid = document.querySelector(".bg-grid");
  if (!grid) return;

  const step = 5;
  const currentTransform = grid.style.transform;
  const match = currentTransform.match(/translate\(([-0-9.]+)px,\s*([-0-9.]+)px\)/);
  let x = match ? parseFloat(match[1]) : 0;
  let y = match ? parseFloat(match[2]) : 0;

  if (e.key === "ArrowUp") y -= step;
  else if (e.key === "ArrowDown") y += step;
  else if (e.key === "ArrowLeft") x -= step;
  else if (e.key === "ArrowRight") x += step;
  else return;

  e.preventDefault();
  grid.style.transform = `translate(${x}px, ${y}px)`;
});

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Email Copy to Clipboard
const emailLink = document.querySelector(".email-link");
if (emailLink) {
  emailLink.addEventListener("click", (e) => {
    e.preventDefault();
    const email = "jaypatel15406@gmail.com";

    navigator.clipboard.writeText(email).then(() => {
      emailLink.classList.add("copied");
      setTimeout(() => {
        emailLink.classList.remove("copied");
      }, 2000);
    }).catch(() => {
      // Fallback: open mailto if clipboard fails
      window.location.href = `mailto:${email}`;
    });
  });
}

// Fade-in Animation on Load
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  if (content) {
    content.style.opacity = "0";
    content.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      content.style.opacity = "1";
    }, 500);
  }
});
