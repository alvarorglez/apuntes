(function () {
  function applyByPath() {
    const el = document.body;           // <-- usar BODY
    const p  = location.pathname;

    // reset a neutro (paleta por defecto del tema)
    el.removeAttribute("data-md-color-primary");
    el.removeAttribute("data-md-color-accent");

    if (p.includes("/matematicas/")) {
      el.setAttribute("data-md-color-primary", "red");
      el.setAttribute("data-md-color-accent",  "red");
    } else if (p.includes("/fisica/")) {
      el.setAttribute("data-md-color-primary", "orange");
      el.setAttribute("data-md-color-accent",  "orange");
    } else if (p.includes("/quimica/")) {
      el.setAttribute("data-md-color-primary", "green");
      el.setAttribute("data-md-color-accent",  "green");
    }
  }

  applyByPath();
  if (typeof document$ !== "undefined") {
    document$.subscribe(applyByPath);
  }
})();
