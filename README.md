# El Tico FX — Landing + Blog (Astro)

Sitio de elticofx.com construido con Astro. La landing original
(`src/pages/index.html`, sin cambios respecto a `Resultado/Landing/index.html`)
se sirve en `/`. Las fuentes, logos y archivos de SEO viven en `public/`.
El blog se construye con Astro sobre `/blog/`.

## Estructura

```
Landing-Astro/
├── public/              # Fuentes, logos, robots.txt, sitemap.xml
├── src/
│   ├── pages/index.html # Landing actual (idéntica a Resultado/Landing/index.html)
│   ├── content/blog/    # Posts del blog en Markdown
│   ├── content.config.ts# Esquema de cada post (frontmatter)
│   ├── layouts/          # BlogLayout (head SEO, navbar, footer)
│   ├── components/       # Navbar, Footer
│   ├── styles/global.css # Tokens de diseño y estilos compartidos
│   └── pages/blog/        # Listado (/blog/) y plantilla de post ([...slug])
```

## Cómo agregar un post nuevo

1. Crear un archivo `.md` en `src/content/blog/`, por ejemplo `mi-nuevo-post.md`.
2. Completar el frontmatter:

```md
---
title: "Título del post"
description: "Resumen para SEO y para la tarjeta del listado"
pubDate: 2026-06-20
segment: "traders-retail" # traders-retail | ib | academias | fondos | networkers | inversores | general
tags: ["Tag1", "Tag2"]
---

Contenido en Markdown...
```

3. El post aparece automáticamente en `/blog/` y en `/blog/mi-nuevo-post/`,
   y se incluye en el sitemap (`sitemap-index.xml`) al hacer build.
4. Antes de redactar contenido, revisar `Contexto/` y `Sistema/Secuencia Email.txt`
   (reglas en `CLAUDE.md`) — no inventar datos del broker.

## Comandos

| Comando           | Acción                                      |
| ------------------ | ------------------------------------------- |
| `npm run dev`       | Servidor local en `localhost:4321` (`/` y `/blog/` funcionan igual que en producción) |
| `npm run build`     | Genera el sitio final en `./dist/`          |
| `npm run preview`   | Sirve `./dist/` para revisar antes de subir |

## Deploy

`npm run build` genera `dist/` con la landing + blog completos. Apuntar el
hosting actual de elticofx.com a esta carpeta `dist/` (o configurar el build
command `npm run build` con output `dist` si el host hace el build).
