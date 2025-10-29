
# Apuntes con MkDocs Material — Plantilla

## Requisitos
Python 3.10+

```bash
pip install -r requirements.txt
```

## Servir en local
```bash
mkdocs serve
```
Abre http://127.0.0.1:8000

## Construir para producción
```bash
mkdocs build
```

## Despliegue en GitHub Pages
1. Crea un repo y sube todo.
2. Activa GitHub Pages (branch `gh-pages`).
3. La acción incluida publicará automáticamente con cada push a `main`.

## PDF
Instala `mkdocs-with-pdf` y descomenta el bloque en `mkdocs.yml`.
```bash
pip install mkdocs-with-pdf weasyprint
mkdocs build
```
