# Verifikation og aflevering

Kontrolleret lokalt med Chromium, Puppeteer, WebGL (SwiftShader), WebAssembly, Python/trimesh og XML/ZIP-analyse. Ingen ændringer er deployet på en ekstern server.

## Bevarelse

87 unikke filer er gemt uændret i `original/`: HTML-sider, to JS-bundles, to WASM-filer, tre CSS-filer, hjælp-/galleri-scripts, 43 TTF-filer, billeder samt demonstrationsvideo med undertekster. Alle downloadede filer har kilde-URL, UTC-tidspunkt, størrelse og SHA-256 i manifestet. Gentagne HTML-URL’er med forskellige query-parametre gav identiske bytes og deler lokal fil.

`verify-preservation.py` kontrollerer hashes, størrelser og signaturer. Begge WASM-filer har korrekt WASM v1-signatur, alle fonte er egentlige fontfiler, og billed-/videoformaterne er verificeret. FontTools kunne læse alle 43 fonter; deres tegnkort og embedded licensoplysninger er registreret. Ingen hentninger i manifestet mangler eller er HTML-fallbacks.

Der er ikke hentet serverkode, private filer eller tilbuds-API’er. `/print-service.json` og `/api/print-quote.php` er identificerede service-endpoints, som den lokale udgave ikke bruger.

## Udførte browserforløb

Alle nedenstående forløb kørte med eksterne URL’er blokeret. Arbejdskopien forsøgte **ingen** eksterne kald i de registrerede forløb. Ingen relevante JavaScript-fejl eller HTTP-fejl forekom i model-/eksporttestene.

| Forløb | Faktisk kontrolleret |
|---|---|
| Opstart | Lokal HTML/JS/CSS, worker, begge WASM-motorer, font, billeder og synligt 3D-preview |
| Bogstav A | 100 mm højt, 35 mm dybt; separat body og front; STL ZIP og multi-plate 3MF |
| ÆØÅ | Tre bogstaver med DejaVu Sans Bold, 80 mm højde, 30 mm dybde; begge eksporttyper |
| Gem/genåbn | Design A gemt som `.bogstavvaerkstedet.json`, erstattet med ÆØÅ og genåbnet; A genskabt og eksporteret |
| Mål og tolerancer | A ændret til 110 mm højde, 40 mm dybde, 2,4 mm væg og 0,3 mm `frontFit`; indstillinger og STL-mål kontrolleret |
| Opdelt lyskasse | 360 × 140 mm rektangulær lyskasse på 256 mm plader, separat front og butterfly keys; 11 STL-dele inklusive samlingsnøgler |
| Lyskasse | 180 × 140 mm, separat front/masker; STL og 3MF |
| SVG med hul | 100 × 100 yderkontur med 40 × 40 indre hul, `evenodd`; import, beregning og eksport |
| Alle bundled fonte | Alle 43 filer hentet lokalt og indlæst med browserens FontFace API, status `loaded` |
| Fontimport | DejaVu Serif Bold importeret gennem programmets TTF/OTF-filinput; Ø genereret og eksporteret |
| Stander og ledninger | A med `standMode=desk`, `ledMode=wires`; seks STL-dele samt 3MF |
| Dekorative bogstaver | Originalens standardprojekt i decorative-editoren; tre STL-dele og multi-plate 3MF |
| Halo/backlit | Originalens standardprojekt med fem dele, herunder shell/reflector/mounting; ZIP og 3MF |
| Undermappe | Komplette ovenstående tests på `/letter-studio/public/studio.html` |
| Selvstændig webrod | Opstart, A og begge eksporttyper på `http://localhost:8769/studio.html` |

Rå, læsbare testrapporter: `main-browser-report.json`, `extra-browser-report.json`, `main-geometry-report.json`, `extra-geometry-report.json`. Eksportfilerne fra denne session ligger lokalt i `/tmp/letter-studio-exports` og `/tmp/letter-studio-extra`; tests kan genskabe dem.

Præsentations-, hjælpe-, opdaterings-, kredit- og privatlivssider er desuden kontrolleret lokalt. Produktnavnet er tilpasset i hovededitoren og i decorative/halo-editorernes overskrifter. Billedaktiver og de bevarede hjælpescripts serveres lokalt.

## Eksporternes indhold

11 model-/eksportforløb gav 11 produktions-ZIP’er og 11 multi-plate 3MF’er. Desuden er 3MF-filer inde i produktions-ZIP’erne undersøgt.

- STL: binært format, korrekt filstørrelse i forhold til trekantantal, ikke-tom endelig geometri, finite koordinater og positive mål/volumener.
- Printorientering: sammenhængende winding og positivt fortegnet volumen kontrolleret.
- Mål: A-filerne har forventet højde/dybde, og ændrede mål samt væg-/fit-parametre er verificeret.
- Samlinger: den opdelte lyskasse indeholder særskilte butterfly key-filer.
- 3MF: ZIP-integritet, content types, modelrelationer, objekt-/komponentreferencer, finite transforms, millimeterenheder, vertex-/trekantindeks og ikke-tomme modeldele kontrolleret.
- Farver: multi-plate 3MF indeholder farveslots i `Metadata/project_settings.config`; ekstruderreferencer i `model_settings.config` peger på gyldige slots. Farve/filament i den endelige slicer skal stadig vælges af brugeren.

### Eksisterende topologisk begrænsning

Tre eksporter af den samme A-grundform (A, genåbnet A, A med stander) har en body-STL med **7 non-manifold-kanter**, hvor mere end to trekanter deler en kant. Der er **ingen frie randkanter** i disse meshes. Det er derfor mere præcist end den første arbejdshypotese om “åbne kanter”: meshes er ikke topologisk manifold, selv om de har positivt volumen og sammenhængende winding.

De resterende undersøgte STL-dele i disse testforløb er watertight ifølge trimesh. ÆØÅ, ændrede mål, lyskasser, splitdele, SVG, fontimport, decorative og halo indeholder i de valgte prøver kun watertight STL-dele.

Den urørte original blev kørt separat med samme A- og standerparametre. **Alle otte STL-filer i disse to original-/lokal-sammenligninger er byte-for-byte identiske.** SHA-256 og sammenligningsresultater findes i `original-comparison.json`. Defekten er altså bevaret fra originalmotoren og skyldes ikke navne-/hostingtilpasningen. Ingen automatisk reparation af eksportfiler er foretaget.

PrusaSlicer er ikke installeret på pc’en. Åbning i slicer, eventuelle reparationsbeskeder, farve-/pladefortolkning og fysisk kontrol af pasning/samlinger er derfor stadig manuel kontrol. Originalens prototypebetegnelser for samlinger og standere er bevaret.

## Identificeret, men ikke udtømmende afprøvet

Alle alternative konstruktioner, alle 12 dekorative presets, hver font i geometri på tværs af alle konstruktioner, fontformater ud over den testede TTF, fulde canvas-redigeringsforløb, dovetail-samlinger, alle wire-positioner, alle kalibreringsdele, PDF-printskabeloner og alle materialefinish er identificeret i originalen. De er bevaret, men der er ikke gennemført en fuld kombinations-/printertest af dem.

Originalens halo-editor siger selv, at backlit-projekter ikke kan gemmes til senere redigering endnu. Main-editorens gem/genåbn er testet; denne originale begrænsning må ikke forveksles med tab af en eksisterende funktion.

## Hosting

- HTTP-serveren har kørt uden COOP/COEP og uden cross-origin isolation. Motoren fungerer i denne opsætning.
- Docker Compose og NPM-overlay er syntaktisk valideret med `docker compose config`.
- Docker-runtime/Nginx-containeren kunne ikke startes på denne konto: adgang til `/var/run/docker.sock` blev afvist. Nginx-konfigurationen er leveret, men containerstart, proxy-forwarding og TLS skal kontrolleres på serveren.
- Kun `public/` skal serveres i installationen. `original/`, analysefiler og værktøjer er ikke med i Nginx-mountet.
- Intet er deployet, og denne nye underside er ikke committet/pushet. Det tidligere arbejde med online-tools er separat pushet som `71e0eab`.

## Licensstatus

Originalens egne kodevilkår kunne ikke fastslås i de bevarede offentlige filer. Det er dokumenteret på kreditsiden. Eksisterende notices og fontoplysninger er bevaret; tredjepartsbibliotekernes licenser præsenteres ikke som en licens til hele programmet. Der er ikke indhentet særskilt tilladelse fra ophavsmanden som del af denne opgave.

## Dansk udgave og fjernet Feedback-knap

Brugerflade og lokale hjælpesider hedder Bogstavværkstedet og er oversat til dansk. Browserkontrollen verificerer `lang=da`, produktnavnet i hovededitor og halo samt at `#openFeedback` ikke findes. Alle fem støttesider indlæses uden manglende aktiver, JavaScript-fejl eller eksterne kald.

De 11 eksportforløb er gentaget efter oversættelsen, inklusive ÆØÅ, gem/genåbn, SVG, fontimport, dekorative og bagbelyste bogstaver. STL-indholdet i de ti forskellige modelprøver er byte-identisk med prøverne før oversættelsen. Rapporterne ligger lokalt i `/tmp/bogstavvaerkstedet-exports` og `/tmp/bogstavvaerkstedet-extra`. Originalens 87 filer består fortsat manifestets SHA-256-kontrol.
