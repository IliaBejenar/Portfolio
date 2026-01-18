const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => nav.classList.toggle("open"));

// fake contact form (без сервера)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements.name.value.trim();
  const msg = form.elements.message.value.trim();
  hint.textContent = `✅ Сообщение “${msg.slice(0, 60)}${msg.length > 60 ? "…" : ""}” от ${name} отправлено.`;
  form.reset();
});
