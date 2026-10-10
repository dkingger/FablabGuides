# Bogstavværkstedet

Lokal, selvstændig tilpasning af **Bogstavværkstedet Beta 102**. Den eksisterende kode, geometrimotor og arbejdsgang er bevaret. Dette er ikke et genimplementeret værktøj.

**Status:** lokal udgave, ikke deployet eller pushet. Linket fra FabLab Guides’ `index.html` åbner `letter-studio/public/studio.html`.

## Start på denne computer

Fra FabLabGuides-projektets rod:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Åbn http://localhost:8765/letter-studio/public/studio.html eller forsiden http://localhost:8765/. Stop med Ctrl+C. Hvis projektets udviklingsserver allerede kører på port 8765, skal den ikke startes igen. Brug HTTP; dobbeltklik på HTML-filen (`file://`) understøtter ikke programmets workers/WASM.

Kun `public/` skal publiceres. `original/` indeholder den urørte reference, inklusive originalens analyse-/formularreferencer. Brug ikke `original/` som produktionsside.

## Selvstændigt subdomæne med Docker/Nginx

```sh
cd letter-studio
docker compose config --quiet
docker compose up -d
```

Åbn http://127.0.0.1:8087/studio.html. Roden viser programmets bevarede præsentationsside. Standardbindingen er kun lokal; ændr `LETTER_STUDIO_PORT` efter behov.

```sh
# Status og log
docker compose ps
docker compose logs --tail=100
# Stop
docker compose down
# Opdater Nginx-image
docker compose pull
docker compose up -d
```

Der er ingen backend, database eller Dockerfile: Nginx serverer `public/` read-only. Manglende filer returnerer 404, WASM serveres som `application/wasm`, og HTML/JS/WASM skal revalideres ved genindlæsning. Opdater hele `public/` samlet, mens tjenesten er stoppet, så nye og gamle motorfiler ikke blandes.

Docker Compose-filerne er valideret lokalt. **Containerstart kunne ikke testes på denne pc:** brugerkontoen får `permission denied` fra `/var/run/docker.sock`. Browserfunktionerne er testet via lokal HTTP-server. Ingen ændringer er foretaget på din server.

## Nginx Proxy Manager

Når Nginx Proxy Manager også kører i Docker, skal de to tjenester dele et Docker-netværk. Find det eksisterende netværksnavn med `docker network ls` og brug det i stedet for `DIT_NPM_NETVÆRK`:

```sh
NPM_NETWORK=DIT_NPM_NETVÆRK docker compose -f compose.yaml -f compose.npm.yaml config --quiet
NPM_NETWORK=DIT_NPM_NETVÆRK docker compose -f compose.yaml -f compose.npm.yaml up -d
```

Opret en Proxy Host i Nginx Proxy Manager:

- Domain Names: dit valgte subdomæne, fx `letters.ditdomæne.dk`.
- Scheme: `http`.
- Forward Hostname: `johannes-letter-studio`.
- Forward Port: `80`.
- Aktivér SSL-certifikat og Force SSL i Nginx Proxy Manager.
- Undlad ekstra cache af HTML/JS/WASM. WebSockets er ikke nødvendige.

Brug samme `-f`-argumenter og `NPM_NETWORK` ved efterfølgende start/stop/pull. Et NPM-container-netværks `127.0.0.1` er ikke værtsmaskinen, så brug det fælles netværk ovenfor. Ved en separat proxyserver kan HTTP-porten i stedet bindes til værtsmaskinens private IP med `LETTER_STUDIO_BIND`; begræns adgangen til proxyserveren.

Motoren er testet uden cross-origin isolation (`crossOriginIsolated === false`). Der kræves derfor ikke COOP/COEP-headers i denne bevarede version.

## Mapper og dokumentation

- `original/`: 87 unikke originale filer, bevaret byte-for-byte.
- `original-manifest.json`: URL, tidspunkt i UTC, filstørrelse, MIME-type og SHA-256; versioner i query-parametre er bevaret i URL-feltet.
- `public/`: selvstændig udgave med relative filstier.
- `analysis/*.formatted.js`: læsbare kopier af de to originale bundles, formateret med Prettier 3.6.2; bruges ikke til at køre programmet.
- `overrides/`: lokale kredit- og privatlivssider, som kopieres oven på originalen ved tilpasning.
- `docs/ARCHITECTURE.md`: kodekort, parametre, worker-protokol og funktionsoversigt.
- `docs/VERIFICATION.md`: konkrete browser- og eksportresultater samt kendte begrænsninger.
- `docs/font-licences.json`: embedded navne-, copyright- og licensdata fra alle skrifttyper.
- `docs/ui-inventory.json`: faktisk kontroloversigt fra den kørende brugerflade.

## Tilpasninger og kompatibilitet

Arbejdskopien bruger produktnavnet **Bogstavværkstedet** og viser separat kreditering. Geometrialgoritmer, biblioteker og WASM-versioner er uændrede. Originale designformat-ID’er, Beta 102, filnavne og visse eksportmetadata er bevaret for at sikre, at designfiler kan åbnes igen.

Originalen brugte rodstier som `/worker.js`, `/manifold.wasm`, `/images/...` og `/<font>.ttf`. Disse er ændret til relative URL’er i arbejdskopien. Worker/WASM/font-loading er relativ til modulets URL. Både en selvstændig webrod og undermappen `/letter-studio/public/` kan bruges; browserforløbet er testet i undermappen.

Google Analytics/Tag Manager er fjernet, analytics-afsendelse er slået fra, og Feedback-knappen og upstream-feedbackformularen er fjernet. Printtilbudsfunktionen initialiseres ikke og laver ingen kald til `/print-service.json` eller `/api/print-quote.php`. Ingen login, abonnement, cloudlagring eller ny backend.

## Bevaring og fremtidige opdateringer

Overskriv ikke de bevarede filer med en ny upstream-version. Brug en ny mappe/et nyt manifest til en senere version, sammenlign ændringer, og test igen før publicering. Filernes offentlige tilgængelighed er ikke en licens til hele programmet; se `public/credits.html` og licensafsnittet i rapporten.

For at genskabe arbejdskopien fra denne bevarede version:

```sh
python3 -m venv /tmp/letter-studio-tools
/tmp/letter-studio-tools/bin/pip install beautifulsoup4
/tmp/letter-studio-tools/bin/python tools/adapt.py
```

`tools/adapt.py` har kontrolpunkter, der stopper, hvis forventede bundle-fragmenter mangler. Den skal ikke bruges blindt på nye bundles. Lokale tilpasninger skal ligge i scriptet eller `overrides/`, ellers bliver de overskrevet ved genopbygning.

Hentning af en eksplicit offentlig fil (uden at overskrive eksisterende, forskellige bytes):

```sh
LETTER_STUDIO_ORIGIN='https://din-kilde.example' python3 tools/preserve.py 'studio.html'
```

## Gentag kontrol

Kør fra projektets rod med HTTP-serveren på port 8765:

```sh
python3 letter-studio/tools/verify-preservation.py
node letter-studio/tools/verify-pages.cjs
node letter-studio/tools/verify-browser.cjs
LETTER_QA_EXTRA_ONLY=1 LETTER_QA_OUTPUT=/tmp/letter-studio-extra node letter-studio/tools/verify-browser.cjs
python3 -m venv /tmp/letter-studio-qa
/tmp/letter-studio-qa/bin/pip install trimesh numpy fonttools
/tmp/letter-studio-qa/bin/python letter-studio/tools/verify-exports.py /tmp/letter-studio-exports
/tmp/letter-studio-qa/bin/python letter-studio/tools/verify-exports.py /tmp/letter-studio-extra
```

Browserkontrollen bruger projektets Puppeteer og `/usr/bin/chromium`, blokerer eksterne netværkskald og gemmer eksporter og rapporter i `/tmp/letter-studio-exports` og `/tmp/letter-studio-extra`. Den accepterer kun bekræftelsesdialoger i sin egen testbrowser. Topologiske problemer registreres særskilt; en afsluttet eksporttest er ikke et løfte om fejlfri fysisk printning.

## Dansk brugerflade

`locales/da.json` og `locales/runtime.js` oversætter brugerfladens tekster og dynamiske statusfelter. Inputværdier, skrifttypenavne og filformat-ID’er bevares. De danske hjælpesider ligger i `overrides/`. Kør `tools/adapt.py` efter ændringer.
