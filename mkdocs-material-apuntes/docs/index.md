
---
title: Apuntes de Bachillerato
hide:
  - navigation
  - toc
---

# Apuntes de Bachillerato

Bienvenido/a. Estos apuntes están pensados para **lectura en móvil o PC**, con fórmulas en LaTeX y ejemplos resueltos.

=== "¿Cómo usar esto?"

    1. Navega por el **índice lateral** (☰ en móvil).
    2. Usa la **búsqueda** (tecla `/`) para encontrar definiciones.
    3. Al final de cada tema hay **resumen** y **ejercicios propuestos**.

=== "Convenciones"

    !!! note "Tipos de cajas"
        - **Definición** → `!!! note`
        - **Ejemplo** → `!!! example`
        - **Atención** → `!!! warning`

---

## Matemáticas con LaTeX

Un ejemplo en línea: \( f(x)=x^2 \) ⇒ \( f'(x)=2x \).

Un ejemplo en bloque:

\[
\int_0^1 x^2\,dx = \left. \frac{x^3}{3} \right|_0^1 = \frac{1}{3}.
\]

!!! example "Ejemplo — Función definida a trozos"
    Sea
    $$
    f(x)=
    \begin{cases}
    3x+1, & x\ge 2 \\
    x^2, & x<2
    \end{cases}
    $$
    Entonces \(f(5)=16\) y \(f(-1)=1\).

---

## GeoGebra embebido

Puedes interactuar con recursos de GeoGebra directamente aquí (cambia el `id` por el tuyo):

<div class="ggb-wrapper">
<iframe title="GeoGebra" src="https://www.geogebra.org/material/iframe/id/xh3sd6wt/width/800/height/450/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/true/asb/false" width="800" height="450" style="border:0"></iframe>
</div>

---

## Siguientes pasos

- Abre `docs/calculo/02-derivadas.md` y añade tus propios ejemplos.
- Si quieres **PDF**, instala `mkdocs-with-pdf` y descomenta la sección en `mkdocs.yml`.
