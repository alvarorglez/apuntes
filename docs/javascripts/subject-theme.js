(function () {
  function applyByPath() {
    const html = document.documentElement;
    const p = location.pathname;

    // Reset a neutro (usa la paleta definida en mkdocs.yml)
    html.removeAttribute("data-md-color-primary");
    html.removeAttribute("data-md-color-accent");

    if (p.includes("/matematicas/")) {
      html.setAttribute("data-md-color-primary", "red");     // rojo
      html.setAttribute("data-md-color-accent",  "red");
    } else if (p.includes("/fisica/")) {
      html.setAttribute("data-md-color-primary", "orange");  // naranja
      html.setAttribute("data-md-color-accent",  "orange");
    } else if (p.includes("/quimica/")) {
      html.setAttribute("data-md-color-primary", "green");   // verde
      html.setAttribute("data-md-color-accent",  "green");
    }
  }

  // Primera carga + navegaciones instantáneas de Material
  applyByPath();
  if (typeof document$ !== "undefined") {
    document$.subscribe(applyByPath);
  }
})();
