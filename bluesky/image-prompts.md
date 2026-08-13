# BlueSky — Prompts de imagen (Nano Banana / Gemini 2.5 Flash Image)

Dirección de arte: **03 — Hueso & Tinta**

| Rol | Hex |
|---|---|
| Fondo hueso cálido | `#F2EFE9` |
| Blanco superficie | `#FFFFFF` |
| Tinta (casi negro azulado) | `#101A24` |
| Dorado viejo | `#A8843C` |
| Texto secundario | `#5D584E` |

---

## Reglas que aplican a TODOS los prompts

Estas van en cada prompt. No las quites:

- **`No logos, no badges, no text anywhere in the frame.`** Un emblema de Mercedes o BMW reconocible en tu sitio implica una afiliación que no tienes. Es problema de marca registrada, no de estética.
- **`Photorealistic photograph, not an illustration or 3D render.`** Es exactamente lo que no te gustó del sitio anterior.
- **`No water, no suds, no hose, no bucket.`** Tu diferenciador es que lavas sin agua. Una foto con espuma contradice la página entera.
- **`Muted, expensive colour grade.`** Sin saturación alta. El lujo es apagado.

**Formato:** genera en horizontal 16:9 para el hero, y cuadrado 1:1 para las secciones. Si la herramienta te deja, pide 2K o más — luego yo las comprimo para que carguen rápido.

---

## 1 · Hero (la más importante)

> A close three-quarter crop of the front fender and headlight of a dark navy-black luxury sedan, photographed in a bright studio against a seamless warm ivory backdrop. The paint is flawless and freshly polished, holding one soft elongated highlight running along the body line. Fine water beads sit scattered across the upper surface of the fender, each catching a small point of light. Lighting is a single large soft overhead source producing gentle gradients rather than hard reflections, with warm ivory light spilling from the background onto the lower edge of the car. Shot on an 85mm lens at f/4, shallow depth of field falling off toward the rear of the frame. Muted expensive colour grade: deep ink navy, warm bone, faint antique-gold warmth in the highlights. No badges, no logos, no lettering anywhere in the frame. Photorealistic photograph, not an illustration or 3D render. Landscape 16:9, with generous empty ivory space in the upper left of the frame for text.

**Por qué así:** el espacio vacío arriba a la izquierda no es decorativo — ahí va el titular. Si la imagen viene llena de carro de borde a borde, no hay dónde poner texto y se ve apretada.

---

## 2 · Sección de detailing

> A gloved hand drawing a folded plush microfiber towel across the polished surface of a dark navy car panel, photographed close and slightly from the side, the panel filling most of the frame. Behind the towel the paint is mirror-clean; ahead of it a fine film of dust remains, so the difference between the two halves reads clearly. Soft diffused daylight from a large window on the left. Warm ivory tones reflected in the paint. Neutral grey-beige nitrile glove, cream-coloured towel. Shot on a 50mm lens at f/2.8, very shallow focus on the leading edge of the towel. Restrained premium colour grade — deep navy, bone, warm neutral. No water, no suds, no hose, no bucket anywhere in the frame. No logos, no text. Photorealistic photograph. Square 1:1.

**Por qué así:** la línea entre limpio y sucio cuenta la historia sin explicarla. Y el guante seco sobre pintura seca demuestra el lavado sin agua mejor que cualquier párrafo.

---

## 3 · "Vamos a ti" — entrada de casa

> A dark navy sedan parked on the concrete driveway of a modern suburban house, photographed from a low three-quarter angle during the last hour of daylight. The house is contemporary and understated — pale stone and dark trim — softly out of focus behind the car. An open compact tool case sits on a folded mat beside the front wheel, neatly arranged. Warm low sun rakes across the polished paint, throwing one long soft highlight down the flank. The driveway is completely dry. Muted expensive colour grade: deep navy, warm bone concrete, pale gold light. Shot on a 35mm lens at f/2.8. No people, no logos, no text, no visible brand badges. Photorealistic photograph, calm and premium, not an advertisement. Landscape 16:9.

**Por qué así:** *"the driveway is completely dry"* es la instrucción clave. Es la prueba visual del bylaw, escondida en una foto bonita.

---

## 4 · Textura de fondo (opcional)

> An extreme macro photograph of freshly polished dark navy automotive paint, filling the entire frame, with a single soft gradient of warm ivory light sweeping diagonally across it. Almost abstract. Fine grain, no dust, no scratches, no reflections of objects. Muted colour grade, deep ink navy with warm bone highlight. No logos, no text. Photorealistic. Square 1:1.

**Para qué:** va detrás de la sección del bylaw, muy oscurecida, para dar profundidad sin competir con el texto.

---

## Cómo iterar si no sale a la primera

1. **Sale muy saturada o muy azul** → agrega `desaturated, muted, low saturation, matte finish`
2. **Sale con logo o emblema** → repite `absolutely no brand badges, no emblems, no grille logos` y describe el carro como `an unbranded modern sedan`
3. **Sale tipo render 3D** → agrega `shot on a Canon R5, real photograph, natural sensor grain, subtle lens vignetting`
4. **Sale muy llena, sin espacio para texto** → agrega `wide empty negative space on the left third of the frame`
5. **El carro sale muy deportivo** → cámbialo a `a modern midsize sedan or crossover, understated and elegant, not a sports car`

---

## Cuando las tengas

Mándamelas y yo:
- Las convierto a WebP y las sirvo con `next/image` (peso correcto por dispositivo)
- Le pongo `priority` a la del hero, que es el elemento LCP
- Escribo el `alt` de cada una para accesibilidad y SEO
- Ajusto el punto focal para que en celular no se corte la parte importante

**Y lo repito: cuando tengas fotos reales de tu trabajo, estas se van.** Un auto que tú detallaste en Calgary vale más que cualquier imagen generada, aunque la generada se vea más perfecta. La perfección no vende servicios locales — la prueba sí.
