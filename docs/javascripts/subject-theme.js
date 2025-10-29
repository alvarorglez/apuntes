(function () {
  function setVars(main, light, dark) {
    const r = document.documentElement.style;
    r.setProperty("--md-primary-fg-color", main);
    r.setProperty("--md-primary-fg-color--light", light);
    r.setProperty("--md-primary-fg-color--dark", dark);
    r.setProperty("--md-accent-fg-color", main);
  }

  function applySubjectTheme() {
    // contenedor principal del contenido
    const inner = document.querySelector(".md-content__inner");
    if (!inner) return;

    // reset a colores por defecto del tema
    const r = document.documentElement.style;
    r.removeProperty("--md-primary-fg-color");
    r.removeProperty("--md-primary-fg-color--light");
    r.removeProperty("--md-primary-fg-color--dark");
    r.removeProperty("--md-accent-fg-color");

    if (inner.classList.contains("mate")) {
      setVars("#e53935", "#ffcdd2", "#b71c1c");     // rojo
    } else if (inner.classList.contains("fisica")) {
      setVars("#fb8c00", "#ffe0b2", "#e65100");     // naranja
    } else if (inner.classList.contains("quimica")) {
      setVars("#43a047", "#c8e6c9", "#1b5e20");     // verde
    }
    // si no hay clase -> Inicio queda con color neutro del tema
  }

  // Material usa navegación instantánea; hay que re-aplicar tras cada carga
  document$.subscribe(applySubjectTheme);
})();
