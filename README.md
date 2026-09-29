# FablabGuides

(https://www.fablabguides.dk/)
(https://dkingger.github.io/FablabGuides/index.html)

## Version

Aktuel version: 1.78
Dato: 2026-09-27

## Seneste aendringer

### Vektor-Viktor – boolske huller (2026-09-29)

- Rettet Forskel på fyldte figurer: en mindre cirkel inde i en sort firkant bliver nu et hul.
- Resultatets konturer samles i én SVG-sti med `fill-rule="evenodd"`, så huller bevares ved eksport og efterfølgende boolske operationer.

### Labyrintværksted v1.1 (2026-09-29)

- Tilføjet bundplade med 5 mm huller, som placeres i labyrinten med mus eller tastatur.
- Hullerne vises på begge plader og kontrolleres for overlap med vægge og afstand til andre huller.
- Labyrint og bundplade kan eksporteres separat eller samlet som SVG med millimetermål.
- Bevaret tilbageknappen til forsiden og opdateret værkstedets versionsnummer og forsidegenvej.

### v1.78 (2026-09-27)

- Opdateret den danske og engelske tilgængelighedserklæring med de aktuelle IBM-resultater og en præcis vurdering af WCAG 2.2 niveau AA.
- Beskrevet gennemførte forbedringer, resterende manuelle kontroller og testmetoden uden at fremstille 0 automatiske fejl som en fuld WCAG-godkendelse.
- Tilføjet en konkret feedbackkanal via `johs.dahl@gmail.com`.
- Rettet erklæringernes mobilvisning, så lange overskrifter og tekst ikke klippes ved 320 CSS-pixels.

### v1.77 (2026-09-27)

- Rettet 305 relative billedstier i de bevarede ældre guider, så billederne igen indlæses fra den fælles `billeder/`-mappe.
- Udvidet `npm test` med kontrol af alle 458 billedreferencer på de 28 ældre HTML-sider.
- Genkontrolleret alle 82 HTML-sider med IBM Equal Access: fortsat 0 konstaterede fejl, 822 potentielle fund, 180 manuelle kontroller og 45 anbefalinger.

### v1.76 (2026-09-27)

- Gennemgået de 1328 potentielle IBM-fund regel for regel og reduceret dem til 822 uden at undertrykke scannerfund.
- Erstattet den tekstbærende gradient på forsiden med en ensfarvet baggrund og justeret blå/hvide tekstfarver til dokumenteret WCAG AA-kontrast.
- Gjort carouseltrin synligt nummererede og mindst 28 × 28 pixels på alle 24 berørte guide-sider, mens valg og mobilombrydning er bevaret.
- Gjort seks ældre billedcarouseller tastaturbetjente med fokusstyring, Escape og fokusretur samt rettet de gamle sprogskifts links og billedstier.
- Tilføjet `npm test`, som kontrollerer almindelige sider og dialoger, guidecarouseller, ældre carouseller, sprogskift og hele WeDo-forløbet.
- Seneste IBM-scanning af 82 HTML-sider: 0 konstaterede fejl, 822 potentielle fund, 180 manuelle kontroller og 45 anbefalinger. Den regelbaserede vurdering står i [`TILGAENGELIGHEDSVURDERING.md`](TILGAENGELIGHEDSVURDERING.md).

### v1.75 (2026-09-27)

- Tilføjet `Labyrintvaerksted.html`, som kan generere og redigere laserskårne labyrinter samt eksportere dem som SVG.
- Tilføjet Labyrintværksted under Populære genveje på forsiden og en tydelig tilbageknap på værkstedssiden.
- WeDo Blokværksted og Labyrintværksted har begge fået versionsnummeret v1.0 på forsiden og værkstedssiderne.
- Fjernet genvejen til den engelske PDF-guide fra Populære genveje; selve guidefilen er bevaret.
- Tilføjet Puppeteer som udviklingsafhængighed, så WeDo-browsertesten kan køres reproducerbart.
- Forbedret tilgængeligheden på hele sitet, herunder tastaturbetjening, fokusmarkeringer, feltnavne, kontrast, navigation og dialoger.
- WeDo-blokværkstedets blokke kan nu flyttes, indlejres og slettes med tastaturet.
- Fjernet syv ubrugte filer fra `old/`; filer, som fortsat bruges gennem de gamle guideforsider, er bevaret.
- IBM Equal Access finder 0 konstaterede fejl på de 82 nuværende HTML-sider. Potentielle og manuelle kontroller er fortsat beskrevet i [`TILGAENGELIGHEDSVURDERING.md`](TILGAENGELIGHEDSVURDERING.md), så resultatet er ikke i sig selv en fuld WCAG-godkendelse.

### v1.74 (2026-09-23)

- Tilføjet hjørneradius i millimeter og tekst på bue med justerbar vinkel.
- Buet tekst kan redigeres, flyttes, skaleres og konverteres til konturer. Positiv vinkel bøjer opad som angivet i brugerfladen.
- SVG-eksport bruger fysiske millimetermål uafhængigt af zoom.
- Bevaret dobbeltklik på zoomprocenten for at nulstille til 100 %.
- Rettet afrundede hjørner ved ScanNCut-eksport og booleske operationer samt fortrydelse af hjørneradius og tekstbue.
- Opdateret versionsnummeret på forsiden.

### v1.73 (2026-09-16)

Ændringerne nedenfor dækker springet fra v1.64 til den leverede v1.73 samt den efterfølgende zoomrettelse. Git-historikken indeholder ikke separate udgivelser af mellemversionerne.

#### Zoom og navigation

- Rullehjulet zoomer mod musemarkøren, også lige uden for papiret.
- Hold rullehjulet nede og træk for at panorere tegnefladen.
- Arbejdsområdet giver plads til zoom og panorering i alle retninger.
- Konturer og tekststreger bevarer deres visuelle stregtykkelse ved zoom.
- Dobbeltklik på procenttallet mellem minus og plus nulstiller zoom til 100 % og centrerer tegnefladen. En hjælpetekst vises, når markøren holdes over tallet.

#### SVG-import, farver og størrelse

- SVG-import bruger filens fysiske mål og viewBox til at bevare størrelsen i millimeter; motivet centreres uden automatisk tilpasning til siden.
- Laserfarver bruger ren rød (`#FF0000`) til skæring og sort (`#000000`) til gravering. Synligt fyld og synlige streger normaliseres ved SVG-import i laserformat.
- Farve- og linjetilstand håndterer importerede CSS-regler og genbrugte SVG-figurer (`<use>`) bedre, så fyld kan fjernes i linjetilstand.
- Opløsning af importerede grupper frigør figurer gennem hele gruppehierarkiet og bevarer deres placering og beregnede udseende.
- Skalering og flytning tager højde for importerede, spejlede og roterede figurers transformationer. Komplekse SVG-stier bevares ved skalering.
- Importerede SVG-figurer bevarer som udgangspunkt proportionerne ved skalering; hold Shift nede for at ændre bredde og højde uafhængigt.
- Ændringer i målfelter anvendes ved Enter, Tab eller fokusskift frem for ved hvert tastetryk.

#### Markering, punkter og figurer

- Ctrl+A / Cmd+A markerer alle objekter på tegnefladen, når man ikke skriver i et tekstfelt.
- Figurer uden fyld er lettere at gribe inden for deres afgrænsningsboks, og flere markerede objekter kan trækkes samlet.
- Flere ankerpunkter kan markeres med Shift eller en markeringskasse og flyttes eller slettes samlet.
- Delete / Backspace sletter markerede ankerpunkter under punktredigering; ellers slettes de valgte objekter.
- Punktredigering håndterer flere SVG-stikommandoer og holder delstier adskilt, så de ikke forbindes af utilsigtede diagonaler.
- Forening af akseparallelle rektangler beregnes direkte som vektorer for at bevare mål og rette vinkler. Øvrige booleske operationer bruger finere konturbehandling.

#### Eksport og hjemmeside

- Den særlige tekstgruppering fra v1.64 er fjernet i den leverede v1.73: SVG-eksport opretter ikke længere en ekstra gruppe pr. tekstfelt, og FCM-eksport samler ikke nødvendigvis hele tekstfeltet som én del. FCM-eksport grupperer fortsat indlejrede konturer, så bogstavhuller holdes sammen med deres ydre kontur.
- `index.html`: Vektor-Viktor-linket viser v1.73.

### Hjemmeside (2026-09-11)

- Tilføjet `garn-bandit.html` med Garn Bandit v1.0.
- Tilføjet genveje til Garn Bandit på den danske og engelske forside.

### v1.64 (2026-09-08)

- `vektor-viktor.html`
  - Eksport samler alle konturer fra hvert tekstfelt i én SVG-gruppe til laser og én FCM-del til ScanNCut.
- `index.html`
  - Vektor-Viktor-link viser nu version v1.64.

### v1.63 (2026-09-08)

- `vektor-viktor.html`
  - Opdateret med den leverede Vektor-Viktor v1.63.
  - Sammenklappelige menuer i egenskabspanelet med én sektion aaben ad gangen.
  - ScanNCut bruger sorte konturer uden fyld, ogsaa for importerede SVG-objekter.
  - Rettet spejling af transformerede SVG-grupper.
  - Forbedret tekstkonturer med mere praecis sporing og kurver.
- `index.html`
  - Vektor-Viktor-link viser nu version v1.63.

### v1.61 (2026-09-07)

#### Vektor-Viktor

- `vektor-viktor.html`
  - Normaliseret tilbage-knappens label til Tilbage til FabLab Guides.
  - Eksportknapper omdoebt til Gem til laser og Gem til Scan'n'Cut.
  - FCM-eksport tvinger nu alle vektorobjekter til roed linje foer .fcm genereres.
  - ScanNCut-sideformat laaser farvevalg og viser linjer som sorte i editoren.

#### Hjemmeside

- `index.html`
  - Fjernet Online tools-kortet under guides-sektionen.
  - Fjernet statistikboksen Maskiner og software i hero-omraadet.
  - Vektor-Viktor-link viser nu version v1.61.

- `en/index.html`
  - Fjernet statistikboksen Machines and software i hero-omraadet.

- `guide-til-laserfiler.html`
- `maskiner.html`
- `materiale-tykkelse-skalering.html`
- `materialer.html`
- `online-tools.html`
- `en/guide-to-laser-files.html`
- `en/maskiner.html`
- `en/materialer.html`
- `en/online-tools.html`
  - Standardiseret brand/tilbage-knaptekst til FabLab Guides.

### v1.60 (2026-09-07)

Denne udgivelse blev oprindeligt registreret som v1.60.0 i README; værktøjet viste v1.60.

- `vektor-viktor.html`: Opdateret fra v1.58 til v1.60 med knapper til Forskudt linje og Array i værktøjslinjen og indstillinger i separate dialogvinduer.
- `online-tools.html`: Tilføjet Printables og MakerWorld under 3D-design, opdateret beskrivelsen og fjernet Ny-badges.
- `index.html`: Forenklet hurtiglinks og opdateret Vektor-Viktor-linket til v1.60.
- `styles.css`: Fjernet ubrugte badge-styles.
- `billeder/tools/printables.webp`: Tilføjet ikon til Printables.

## Test

Installer udviklingsafhængighederne, start en lokal server og kør hele browsertestpakken:

```sh
npm install
python -m http.server 8765
```

Kør derefter i en anden terminal:

```sh
npm test
```

Testene starter Chrome automatisk og kontrollerer bl.a. tastaturbetjening, fokus, carouseller, import/eksport og layout ved 320 og 1280 pixels. Deltestene kan køres med `npm run test:accessibility`, `npm run test:potentials` og `npm run test:wedo`.

## Versionsstandard

Projektet bruger versionsformatet `MAJOR.MINOR`.

- MAJOR: Inkompatible aendringer eller stoerre struktur-aendringer.
- MINOR: Nye features, nye guides og forbedringer.

Eksempler:

- `1.78` -> Aktuel release.
- `1.79` -> Naeste release med nye forbedringer.
- `2.0` -> Stoerre breaking release.

### Saadan opdateres versionen

1. Opdater `Aktuel version` og `Dato` i denne fil.
2. Tilfoej en ny sektion under `Seneste aendringer` med versionsoverskrift.
3. Beskriv kort, hvilke filer/funktioner der er aendret.
