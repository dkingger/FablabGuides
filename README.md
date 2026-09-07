# FablabGuides

(https://www.fablabguides.dk/)
(https://dkingger.github.io/FablabGuides/index.html)

## Version

Aktuel version: 1.60.0
Dato: 2026-09-07

## Versionsstandard

Projektet bruger Semantic Versioning: `MAJOR.MINOR.PATCH`.

- MAJOR: Inkompatible aendringer eller stoerre struktur-aendringer.
- MINOR: Nye features, nye guides eller stoerre forbedringer, som er bagudkompatible.
- PATCH: Mindre rettelser, tekstjusteringer, layoutfixes og fejlrettelser uden ny funktionalitet.

Eksempler:

- `1.60.0` -> Ny feature-release.
- `1.60.1` -> Mindre rettelse efter release.
- `2.0.0` -> Stoerre breaking release.

### Saadan opdateres versionen

1. Opdater `Aktuel version` og `Dato` i denne fil.
2. Tilfoej en ny sektion under `Seneste aendringer` med versionsoverskrift.
3. Beskriv kort, hvilke filer/funktioner der er aendret.

## Seneste aendringer

### v1.60.0 (2026-09-07)

- `vektor-viktor.html`
  - Opdateret Vektor-Viktor fra v1.58 til v1.60.
  - Tilfoejet knapper for Forskudt linje og Array i toolbar.
  - Flyttet indstillinger for Forskudt linje og Array til modals.
  - Tilfoejet aabn/luk-logik for de nye modals i JavaScript.

- `online-tools.html`
  - Fjernet Ny-badges i hero, indholdsoversigt og tool-kort.
  - Tilfoejet Printables og MakerWorld under 3D-design.
  - Opdateret beskrivelsen af 3D-design sektionen.

- `index.html`
  - Forenklet hurtiglinks i sidepanelet.
  - Vektor-Viktor-link viser nu version v1.60.

- `styles.css`
  - Fjernet styles for badge-klasser, der ikke laengere bruges.

- `billeder/tools/printables.webp`
  - Tilfoejet ikon til Printables-vaerktoejet.
