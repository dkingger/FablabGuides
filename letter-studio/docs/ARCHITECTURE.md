# Kortlægning af den bevarede Beta 102

## Filer og datavej

`studio.html` indeholder de primære input og referencepunkter. `app.js` udbygger dem med projektvælger, dekorative bogstaver, halo-editor, canvas-editor, kalibrering, opdeling, standere, ledningsføring, lokal designlagring og eksport. CSS ligger i `style.css` og `studio-polish.css`. `index.html`, `help.html`, `updates.html`, `launch.css`, `help-search.js` og `print-gallery.js` er præsentation og hjælp.

1. **Tekst:** en af 43 TTF-filer hentes efter navnet i fonttabellen `Rr`, eller en lokal TTF/OTF importeres. OpenType.js læser fontkonturer; HarfBuzz/WASM håndterer formning af tekst. Tekstindstillinger omsætter konturer til polygoner.
2. **SVG/canvas:** SVGLoader fortolker SVG-konturer, herunder yderkonturer og huller. Canvas-editoren kombinerer tekst, indbyggede figurer og SVG. Input normaliseres til polygoner, som sendes til samme beregningsmotor.
3. **Konturbehandling:** ClipperLib 6.4.2.2 udfører polygonoperationer og offsets. Originalens øvrige validering og tolerancer er bevaret.
4. **Worker:** `worker.js` initialiserer `manifold.wasm`, kalder `setup()` og bruger `CrossSection` og `Manifold` til ekstrudering, boolean-operationer, fronter, skaller, samlinger og tilbehør.
5. **Preview:** `app.js` viser resultatmeshes med Three.js/WebGL. Hurtigt preview har `previewOnly`; printforberedelse beregner fuld detalje. Preview må ikke forveksles med endelig printgeometri.
6. **Eksport:** produktion samles i browseren som ZIP med binære STL-filer, 3MF, CSV, JSON og instruktioner. Multi-plate 3MF indeholder modeldele, placering, Bambu Studio-kompatible metadata og farve-/ekstruderslots. Filamentprofiler og G-code skal stadig vælges/genereres i sliceren.

Ingen serverberegning er nødvendig. Tests lykkedes uden SharedArrayBuffer/cross-origin isolation og med alle eksterne netværkskald blokeret.

## Worker-protokol

Den faktiske grænseflade i denne version:

```js
// Generering eller preview
{
  id,                  // korrelations-ID (tal eller streng)
  polygons,            // konturer fra tekst/SVG
  params,              // design-, konstruktion-, printer- og tilbehørsindstillinger
  glyphs,              // valgfri individuelle glyffer ved joined lettering
  preview,             // true: hurtigere preview; false: printdetalje
  previewCurves        // valgfrit: worker kan falde tilbage ved kurvefejl
}

// Kalibreringsdele
{ id, operation: 'calibration', params, target }

// Svar
{ id, result, availability, timing: { calculationMs } }
// eller
{ id, error, field, availability }
```

`result` indeholder blandt andet `params`, `width`, `height`, `depth`, `parts`, eventuelt `previewOnly`, `split`, `stand`, `assembly`, `warnings` og `exportBlocked`. De konkrete konstruktioner har forskellige felter. `parts` kan indeholde `body`, `face`, `mask`, `cap`, `back`, farveopdelte fronter og Z-positioner. Protokollen er ikke ændret.

Worker svarer med samme `id`; appen håndterer annullering/forældede previews og gemmer separat printresultat. Der er en timeout i originalen. Kalibrering bruger samme motor, men en særskilt operation. Både dekorative og halo-projekter har egne styringer og eksportforløb.

## Vigtige parametre

De fulde faktiske navne, valgmuligheder og startværdier findes i `ui-inventory.json`. Eksempler:

| Område | Felter |
|---|---|
| Indhold | `letterText`, `font`, `projectMode`, `boxShape`, `layout` |
| Tekst | `textSpacing`, `textWidth`, `textSlant`, `textRotation`, `textOutline`, `textLineGap`, `textAlign` |
| Mål | `height`, `depth`, `boxSizing`, `boxWidth`, `boxHeight`, `boxMargin`, `boxRadius` |
| Konstruktion | `construction`, `wall`, `base`, `acrylic`, `faceMethod`, `facePosition`, `frontFit`, `clearance` |
| Samling | `capFit`, `backFit`, `insetSkirtWall`, `frontFlange`, `bodyStyle`, `taperAngle` |
| Opdeling | `splitMode` (`off`, `keys`, `dovetail`), `splitStrategy`, `splitMargin`, `splitFit` |
| Printer | `bedX`, `bedY`, `bedZ` |
| Stander | `standMode`, `standFastening`, `standSizing`, `standWidth`, `standDepth`, `standHeight`, `standFit` |
| Ledninger | `ledMode`, `wireDiameter`, `ledWireDiameter` og originale routing-/positionsfelter |
| Materialer | body/face/cap-farve, finish, materiale, produkt og farvereference |

`height` refererer til motivets højde; en ramme/lyskasse kan være større. `frontFit` og `clearance` er forskellige indstillinger og må ikke behandles som samme tolerance. Deles eksportkoordinater/printorientering er ikke nødvendigvis identiske med den samlede previews placering.

## Funktionsoversigt fra den kørende UI

- Front-lit: separate/joined bogstaver, kontur- og rektangulære lyskasser.
- Konstruktioner: push-in, separate face, integrated face/removable back, front sleeve, rear tray, trim cap og inset lettering.
- Tekst med 43 skrifttyper, fontbrowser, fontimport, spacing, bredde, skråstilling, rotation og outline.
- SVG-import, indbyggede figurer, canvas-editor med objekter/lag, transformation og boolean-operationer.
- Decorative: solid, bubble, brick, outline, ridge, tray, moss, bevel, faceted, stone, wood og monogram; teksturprøve og displaymuligheder.
- Halo/backlit: shell, reflector, wall template, monteringsplaceringer, ledningsudgang, fit-test og PDF/SVG-skabeloner.
- Dimensioner, vægge, fronter, tolerancer, materialefarver, printerstørrelse og preview/assembly-visning.
- Opdeling i sektioner med butterfly keys eller integrerede dovetails; prototype- og fit-testmærkninger fra originalen bevares.
- Standere og wire passages.
- STL ZIP, multi-plate 3MF, lokale designfiler, undo/history, eksempler, guide/hjælp og lokal diagnosticering.

Listen er en kortlægning, ikke en påstand om, at samtlige kombinationer er testet. Se `VERIFICATION.md`. Originalens halo-editor oplyser selv, at backlit-designs endnu ikke kan gemmes til senere redigering; den begrænsning er bevaret.

## Tjenester, der bevidst er frakoblet

`h_()` bygger et dialogforløb med navn, e-mail, leveringsønsker, samtykke og designpakke til et printtilbud. Det undersøger `/print-service.json` og derefter `/api/print-quote.php`. Det er ikke motoren til STL/3MF-eksport. Arbejdskopien initialiserer en no-op `attach` i stedet for `h_()`, så der hverken oprettes tilbudsknapper eller udføres disse kald. Den bevarede reference indeholder stadig originalimplementeringen.

Analytics-afsenderen `Fi` er en no-op, Google-tag-scriptet er fjernet, og Google Forms-linket er fjernet. Det lokale diagnosticeringsforløb er bevaret. Almindelige referencelinks i hjælpetekst kan fortsat åbnes af brugeren; de er ikke runtime-afhængigheder.

## Licenser og kildekode

De downloadede bundles indeholder en Three.js-notits: copyright 2010–2026 Three.js Authors, SPDX MIT. Notitsen er bevaret i original, analyse og arbejdskopi. Andre komponenter er verificeret ved deres kode/API’er, men komplette tredjepartslicenser og præcise versionsnumre er ikke alle leveret som særskilt linkede filer. WASM/bundles er derfor bevaret sammen frem for at gætte eller opgradere versioner.

Fonternes embedded name-tabeller (0/1/5/7/8/9/13/14) er udtrukket til `font-licences.json`; de originale fontfiler med disse oplysninger er uændrede. Blandt disse er DejaVu- og OFL-oplysninger. Ingen eksplicit licens for hele programmets egen kode blev fundet i de offentlige, bevarede filer. Bibliotekernes licenser må ikke udlægges som en tilladelse til at distribuere hele programmet. Udgaven er klargjort lokalt og ikke offentliggjort.
