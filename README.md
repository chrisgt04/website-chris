# christiangtzb.com

Sitio personal de Christian Gutiérrez — [christiangtzb.com](https://christiangtzb.com)

Stack: **React 18 + Vite 5** · Deployed on **Vercel** · Repo: `github.com/chrisgt04/website-chris`

---

## Estructura del proyecto

```
/
├── src/                        # App React principal (christiangtzb.com)
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Nav, Hero, Bio, Services, Clients, Results, Talks, Tech
│
├── public/                     # Archivos estáticos (se copian tal cual al build)
│   └── lasso-reports/          # Portal de reportes cliente Lasso
│       ├── index.html          # Hub: gate de contraseña + selector de períodos
│       └── mayo-2026/
│           └── index.html      # Reporte Mayo 2026 (standalone HTML)
│
├── vercel.json                 # Routing: excluye /lasso-reports/* del SPA rewrite
├── vite.config.js
└── package.json
```

---

## Portal de Reportes — Lasso

### URLs en producción

| Ruta | Descripción |
|------|-------------|
| `christiangtzb.com/lasso-reports/` | Hub principal — gate de contraseña + selector de períodos |
| `christiangtzb.com/lasso-reports/mayo-2026/` | Reporte Mayo 2026 |

### Acceso

- **Contraseña:** `lasso123`
- La autenticación se guarda en `sessionStorage` — dura mientras el tab esté abierto
- El reporte verifica `sessionStorage` al cargar; si no hay auth, redirige al hub

### Flujo de autenticación

```
/lasso-reports/          →  gate (contraseña)  →  sessionStorage.setItem('lasso_auth','1')
                                                    ↓
                                              selector de períodos
                                                    ↓
/lasso-reports/mayo-2026/  →  verifica sessionStorage  →  muestra reporte
                                    ↓ (sin auth)
                              redirect a /lasso-reports/
```

---

## Agregar un nuevo período de reporte

1. **Copiar el reporte más reciente** como base:
   ```bash
   cp public/lasso-reports/mayo-2026/index.html public/lasso-reports/junio-2026/index.html
   ```

2. **Editar el nuevo archivo** con los datos del mes:
   - Cambiar fechas, gasto, leads, MRR, ROAS
   - Actualizar la tabla de leads
   - Actualizar secciones de conjuntos, creativos e ICP

3. **Activar la card en el hub** (`public/lasso-reports/index.html`):
   - Cambiar `class="period-card soon"` → `class="period-card active"` en Junio 2026
   - Cambiar `<div>` → `<a href="/lasso-reports/junio-2026/">`
   - Actualizar stats (gasto, leads, MRR, ROAS)
   - Cambiar status a `is-live` y dot a `live`
   - Agregar una nueva card "soon" para el mes siguiente

4. **Commit y push** — Vercel redeploya automático:
   ```bash
   git add public/lasso-reports/
   git commit -m "feat: agregar reporte Junio 2026"
   git push origin main
   ```

---

## Desarrollo local

```bash
npm install
npm run dev        # → localhost:5173
```

Para previsualizar los reportes estáticos en local (el dev server de Vite los sirve bajo `/lasso-reports/index.html` con el `.html` explícito):

```bash
npx serve public -p 3030
# → localhost:3030/lasso-reports/
```

## Deploy

Push a `main` → Vercel redeploya automático.

El `vercel.json` hace que las rutas `/lasso-reports/*` se sirvan como archivos estáticos en lugar de ser capturadas por el SPA de React:

```json
{
  "rewrites": [
    { "source": "/((?!lasso-reports).*)", "destination": "/index.html" }
  ]
}
```
