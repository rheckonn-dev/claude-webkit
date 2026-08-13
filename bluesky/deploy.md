# Publicar el sitio en Netlify

El código vive en la rama `claude/bluesky-landing-page-2phssp` del repo
`rheckonn-dev/claude-webkit`. El archivo `netlify.toml` en la raíz ya trae la
configuración, así que Netlify la lee sola — no hay que escribir nada en el
formulario de build settings.

---

## Paso 1 · Ver el preview sin tocar tu dominio

Esto es lo que querías: probarlo en vivo antes de reemplazar nada.

1. Entra a [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Conecta GitHub y elige `rheckonn-dev/claude-webkit`
3. En **Branch to deploy**, escoge `claude/bluesky-landing-page-2phssp`
   (no `main` — ahí no está el sitio)
4. Las opciones de build ya vienen llenas desde `netlify.toml`. Dale **Deploy**

En dos o tres minutos tienes una URL tipo `https://algo-random.netlify.app`.
Ábrela en tu celular y prueba:

- Los botones de WhatsApp de cada servicio. Cada uno manda un mensaje distinto
  ya escrito — fíjate si tu bot los interpreta bien.
- Los tres links de redes del footer.
- El menú hamburguesa.
- Pega la URL en un chat de WhatsApp y mira la tarjeta de vista previa.

**Tu dominio `blueskymobile.ca` sigue apuntando a tu sitio viejo todo este
tiempo.** No se toca nada hasta el Paso 2.

---

## Paso 2 · Cuando estés convencido, apuntar el dominio

Dos formas. La primera es la buena.

### Opción A — Reemplazar el sitio que ya tienes (recomendada)

Si tu sitio actual ya está en Netlify con `blueskymobile.ca` configurado, no
muevas DNS. Solo cambia de dónde saca el código:

1. Abre el sitio **viejo** en Netlify
2. **Site configuration → Build & deploy → Continuous deployment**
3. En **Repository**, apunta a `rheckonn-dev/claude-webkit`
4. Cambia **Production branch** a `claude/bluesky-landing-page-2phssp`
5. **Trigger deploy**

El dominio ya está enganchado a ese sitio, así que `blueskymobile.ca` sirve la
página nueva en cuanto termina el build. Cero espera de DNS, y si algo sale mal
vuelves a la configuración anterior en un minuto.

### Opción B — Mover el dominio al sitio nuevo

Si prefieres dejar el viejo intacto:

1. En el sitio **viejo**: **Domain management** → quita `blueskymobile.ca`
2. En el sitio **nuevo**: **Domain management** → **Add a domain** →
   `blueskymobile.ca`
3. Netlify te dice qué poner en Porkbun. Normalmente los nameservers ya están
   apuntando a Netlify, así que no hay que tocar Porkbun.

Aquí sí puede haber unos minutos de propagación.

---

## Editar el sitio después

Todo el texto está en `site/src/lib/content.ts`. Cambias una palabra, un
horario o un teléfono ahí, haces commit, y Netlify reconstruye solo.

Lo que vive en ese archivo:

| Qué | Dónde |
|---|---|
| Teléfono, correo, WhatsApp | `business` |
| Horarios | `business.hours` |
| Ciudades que cubres | `business.areas` |
| Redes sociales | `business.social` |
| Titular y texto del hero | `hero` |
| Los cuatro servicios y su mensaje de WhatsApp | `services` |
| La sección del bylaw y sus cifras | `bylaw` |
| Las preguntas frecuentes | `faqs` |

Si cambias el nombre del negocio, el dominio o los servicios, revisa también
los datos estructurados en `site/src/app/page.tsx` — ahí es donde Google lee
tus horarios y tu zona de servicio.

---

## Antes de publicar en el dominio

- [ ] Probé los botones de WhatsApp desde el celular y mi bot entiende los mensajes
- [ ] Los tres links de redes abren mis cuentas de verdad
- [ ] La tarjeta de vista previa se ve bien al pegar el link en WhatsApp
- [ ] Revisé la página completa en el teléfono, no solo en la computadora
- [ ] Los horarios y la zona de servicio están correctos
