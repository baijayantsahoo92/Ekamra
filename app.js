const formAction = "https://formsubmit.co/baijayant.sahoo@gmail.com";

document.querySelectorAll("form[data-lead-form]").forEach((form) => {
  form.action = formAction;
  const page = document.title.replace(" | Ekamra", "");
  const hidden = {
    _subject: `Ekamra website inquiry - ${page}`,
    _captcha: "false",
    _template: "table",
    _next: `${window.location.origin}${window.location.pathname}#thank-you`
  };
  Object.entries(hidden).forEach(([name, value]) => {
    if (!form.querySelector(`input[name="${name}"]`)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    }
  });
});

const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-nav-links]");
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll("[data-faq]").forEach((item) => {
  item.querySelector("button")?.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

document.querySelectorAll("[data-specialty-filter]").forEach((select) => {
  select.addEventListener("change", () => {
    const value = select.value;
    document.querySelectorAll("[data-specialty-card]").forEach((card) => {
      card.hidden = value !== "All" && card.dataset.category !== value;
    });
  });
});
