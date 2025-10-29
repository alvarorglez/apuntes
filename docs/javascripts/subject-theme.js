(function () {
  // Define una función para aplicar los colores por asignatura
  function setVars(main, light, dark) {
    const r = document.documentElement.style;
    r.setProperty("--md-primary-fg-color", main);
    r.setProperty("--md-primary-fg-color--light", light);
    r.setProperty("--md-primary-fg-color--dark", dark);
    r.setProperty("--md-accent-fg-color", main);
  }

  function applySubjectTheme() {
    // Detecta la clase aplicada al contenido (Material usa .md-typeset)
    const typeset = document.querySelector(".md-typeset");
    if (!typeset) return;

    // Resetea primero los colores
    const r = document.documentElement.style;
    r.removeProperty("--md-primary-fg-color");
    r.removeProperty("--md-primary-fg-color--light");
    r.removeProperty("--md-primary-fg-color--dark");
    r.removeProperty("--md-accent-fg-color");

    // Aplica color según la clase detectada
    if (typeset.classList.contains("mate")) {
      setVars("#e53935", "#ffcdd2", "#b71c1c"); // rojo
    } else if (typeset.classList.contains("fisica")) {
      setVars("#fb8c00", "#ffe0b2", "#e65100"); // naranja
    } else if (typeset.classList.contains("quimica")) {
      setVars("#43a047", "#c8e6c9", "#1b5e20"); // verde
    }
  }

  // Material recarga páginas dinámicamente: hay que re-aplicar en cada cambio
  document$.subscribe(applySubjectTheme);
})();
