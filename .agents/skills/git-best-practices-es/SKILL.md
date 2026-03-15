---
name: git-best-practices-es
description: Buenas prácticas de Git para equipos con Conventional Commits (prefijos estándar en inglés y mensajes en español). Úsala cuando pidan ayuda con commits, ramas, PRs, squash/rebase, naming de branches o clasificación de cambios (feat/fix/docs/chore). No usar para diseño UI, lógica de negocio o implementación de features.
---

# Git Best Practices (ES)

Esta skill define un flujo práctico de Git para trabajo profesional en equipo, manteniendo:
- historial limpio,
- commits pequeños y trazables,
- mensajes consistentes en español,
- PRs fáciles de revisar.

## Activación por contexto

Usar esta skill cuando el pedido mencione:
- mensaje de commit,
- prefijos (`feat`, `fix`, `docs`, etc.),
- ramas (`feature/*`, `fix/*`),
- pull request,
- `rebase`, `squash`, `cherry-pick`, `revert`,
- convenciones de historial Git para equipo.

No usar esta skill cuando el objetivo principal sea:
- diseñar UI,
- escribir componentes frontend,
- cambiar copy o estilos,
- implementar lógica de producto no relacionada con flujo Git.

## Convención de commits (Conventional Commits en español)

Formato recomendado:

`tipo(alcance)!: resumen breve en español`

Ejemplos de formato válido:
- `feat(header): agrega navegación sticky`
- `fix(hero): corrige overlay en móvil`
- `docs(readme): actualiza comandos de desarrollo`
- `refactor(api): simplifica validación de payload`
- `feat(auth)!: migra a tokens rotativos`

Reglas:
- Usar prefijo en inglés (estándar): `feat`, `fix`, `docs`, etc.
- Escribir el resumen en español, en presente y estilo imperativo.
- Máximo ~72 caracteres en la primera línea.
- Sin punto final en el resumen.
- Si hay cambio incompatible, usar `!` y explicar en el footer (`BREAKING CHANGE:`).

## Prefijos recomendados

- `feat`: nueva funcionalidad para usuario o negocio.
- `fix`: corrección de bug.
- `docs`: documentación.
- `style`: formato/estilo sin cambio lógico (espacios, lint, orden).
- `refactor`: cambio interno sin alterar comportamiento externo.
- `perf`: mejora de rendimiento.
- `test`: pruebas nuevas o ajustadas.
- `build`: cambios de build, bundler, dependencias de build.
- `ci`: pipelines, workflows y automatización CI/CD.
- `chore`: mantenimiento general sin impacto funcional directo.
- `revert`: revierte un commit previo.

## Cuerpo y footer (cuando aplique)

Cuando el commit requiere contexto:

```text
fix(video): corrige reproducción en iOS

Evita autoplay cuando low power mode está activo.
Ajusta fallback para mantener legibilidad del hero.

Closes #42
```

Para breaking changes:

```text
feat(api)!: unifica contrato de respuestas

BREAKING CHANGE: se elimina el campo legacy_status y se reemplaza por status.code
```

## Flujo de trabajo recomendado

1. Sincronizar rama base antes de empezar (`main` o la acordada).
2. Crear rama por objetivo concreto:
   - `feat/nombre-corto`
   - `fix/nombre-corto`
   - `chore/nombre-corto`
3. Hacer cambios pequeños y atómicos.
4. Revisar diff antes de commitear (`git diff --staged`).
5. Commit con prefijo correcto y resumen claro en español.
6. Push y abrir PR con contexto funcional:
   - qué cambia,
   - por qué,
   - cómo validar.

## Reglas de higiene del historial

- Evitar commits gigantes y mezclados.
- Evitar mensajes vagos (`"cambios"`, `"fix"`, `"update"`).
- Preferir `rebase` para mantener historia lineal cuando el equipo lo use.
- Usar `squash` al merge si la rama tiene commits ruidosos.
- No forzar push a ramas protegidas.

## Checklist antes de push

- [ ] `git status` limpio (sin cambios inesperados).
- [ ] Solo archivos relevantes en el commit.
- [ ] Mensaje con prefijo correcto + resumen en español.
- [ ] Build/test/lint ejecutados según el proyecto.
- [ ] No se incluyen secretos ni archivos sensibles.

## Ejemplos rápidos (ES)

- `feat(home): agrega sección de testimonios`
- `fix(header): corrige salto de layout en scroll`
- `docs(contributing): define convención de ramas`
- `chore(deps): actualiza astro a versión menor`
- `perf(images): optimiza carga diferida en landing`
- `test(auth): cubre refresh token expirado`
- `ci(actions): agrega cache para pnpm`

## Qué hacer cuando el pedido del usuario sea ambiguo

Si no está claro el tipo de cambio, priorizar:
1. `fix` si corrige comportamiento incorrecto,
2. `feat` si agrega capacidad nueva,
3. `refactor` si solo mejora código interno.

Si aún hay duda, pedir una aclaración breve antes de generar el mensaje final de commit.
