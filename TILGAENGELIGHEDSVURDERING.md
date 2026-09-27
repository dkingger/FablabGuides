# Tilgængelighedsvurdering af FabLab Guides

Dato: 27. september 2026. Målestok: WCAG 2.2 niveau A og AA.

## Aktuel status – 27. september 2026

**Den aktuelle IBM Equal Access-scanning har 0 konstaterede fejl på alle 82 HTML-sider.** Syv ubrugte filer er slettet fra `old/`, WeDo-blokværkstedet er rettet, og Labyrintværkstedet er tilføjet. Der er fortsat åbne potentielle og manuelle kontroller; resultatet er derfor ikke i sig selv en fuld WCAG-godkendelse.

| Måling | Før | Efter |
|---|---:|---:|
| Konstaterede fund | 351 | 0 |
| Potentielle fund | 1329 | 822 |
| Manuelle kontroller | 195 | 180 |
| Anbefalinger | 8 | 45 |

Gennemgangen af de potentielle fund har reduceret tallet fra 1328 til 822. De 506 fjernede fund kom især fra manglende synlig tekst på guidecarousellernes trin-knapper, kontrast som IBM ikke kunne afgøre på gradienter og halvtransparente flader samt den dekorative 404-video. Ingen fund er undertrykt eller fjernet fra scanningen.

### Gennemførte rettelser

- Fælles mobilnavigation kan bryde over flere linjer; alle links er synlige og tastaturtilgængelige ved 320 pixels. Mobilheaderen er ikke længere fastgjort, så den ikke dækker indhold ved den større højde.
- Laserfilguidens grid kan krympe; tekst og overskrifter klippes ikke længere på den testede mobilbredde. Begge sprogversioner er kontrolleret.
- Logo-/hjemlinks har navne med den synlige tekst; springlinks ligger i headeren; hovedindhold kan modtage fokus. Sideområder og layoutkort har korrigeret semantik.
- Genererede maskinguider har rigtige billedknapper og native dialoger med fokusstyring, lukning, frem/tilbage-knapper og markeret aktivt trin. Online tools har samme robuste Tab-afgrænsning.
- Garn Bandit har mørkere tekstfarver, navngivne fil- og skyderfelter, synligt uploadfokus, annoncerede statusbeskeder og tilgængelige tilstandsmarkeringer. Pinde kan nu tilføjes med koordinater eller fjernes via en liste uden mus.
- Vektor-Viktor har korrigerede dekorative ikoner, hovedområde, kontrast og flere feltnavne. Objektlisten bruger knapper med tastaturvalg og bevaret fokus. Hele tegne-/eksportarbejdsgangen er ikke dermed godkendt.
- WeDo har korrigeret kontrast, feltnavne, struktur og fokus. Blokke kan flyttes, indlejres og slettes med tastaturet. Import, eksport, lokal lagring, demoafvikling og stop er testet uden en fysisk hub.
- Syv ubrugte filer er slettet fra `old/`; de 29 filer, som stadig nås gennem de gamle guideforsider, er bevaret.
- Labyrintværkstedet er tilføjet med genvej fra forsiden og tilbageknap. Vægge kan redigeres med Enter, og siden har 0 konstaterede IBM-fejl.
- Guidecarouseller viser nu nummererede trin-knapper på mindst 28 × 28 pixels. Valg, `aria-pressed` og mobilombrydning er bevaret og testet på alle 24 berørte guide-sider.
- Blå tekst er gjort mørkere, hvid tekst på mørke kort er gjort helt hvid, og genvejspanelets tekstbaggrund er ensfarvet. De 63 direkte målbare kontrastfund består nu WCAG AA; gradientudløste kontrastfund er fjernet ved at bruge ensfarvet baggrund.
- Seks ældre billedcarouseller kan åbnes med Enter og mellemrum; fokus flyttes til en rigtig lukkeknap, holdes i dialogen og returneres efter Escape. De gamle sprogskift bruger almindelige links og viser igen deres flag fra korrekte billedstier.
- 305 forkerte relative billedstier i de bevarede ældre guider er rettet. Alle 458 billedreferencer på de 28 ældre HTML-sider peger nu på eksisterende filer.
- Den danske og engelske tilgængelighedserklæring er opdateret med de aktuelle testtal, gennemførte forbedringer, kendte begrænsninger, testmetode og en konkret feedbackkanal. Erklæringen skelner nu tydeligt mellem 0 automatiske fejl og dokumenteret WCAG 2.2 AA-overensstemmelse.

### Verifikation

- Ny IBM-scanning af alle 82 tilbageværende HTML-filer: 0 konstaterede fejl, 822 potentielle fund, 180 manuelle kontroller og 45 anbefalinger.
- Seneste fulde browserkontrol før Labyrintværkstedet dækkede alle daværende sider uden registrerede JavaScript-fejl: [målinger](.a11y-report/fix-tests/browser-all-pages.json). Eksterne ressourcer var blokeret i denne kontrol som i den oprindelige screening.
- [Regressionstest](tools/test_accessibility.cjs) består på forside, laserfilguide, Online tools og AEON-guide i begge sprogversioner: 320px-bredde, synlige navlinks, springlink-fokus og billeddialoger hvor relevante. Dialogtest dækker åbning med Enter/Space, gentagen Tab, Escape, lukkeknap og tilbageføring af fokus; AEON dækker også næste billede.
- Garn Bandit: testet SVG-import, fjern/tilføj pind med tastatur, beskyttelse mod dubletter, statusområde og mobilvisning. [Skærmbillede af pindredigering](.a11y-report/fix-tests/garn-pin-editor-320.png).
- Vektor-Viktor: testet SVG-import, åbning af objektpanel og objektvalg med tastatur, inklusive fokus efter genoptegning af listen.
- WeDo: testet navngivne felter, springlink, bloktilføjelse, flytning, indlejring og sletning, import/eksport, lokal lagring, demoafvikling, stop samt layout ved 320 og 1280 pixels.
- Labyrintværkstedet: testet forsidegenvej, tilbageknap og fokus, vægredigering med tastatur, ny labyrint, fortryd/gentag samt layout ved 320 og 1280 pixels.
- [Potentiale-regressionstest](tools/test_potential_accessibility.cjs) består på 24 guide-sider, seks ældre carouseller og begge gamle sprogskift: nummererede trin, valg, 320px-layout, Enter/mellemrum, fokusafgrænsning, Escape, fokusretur, synlige flag og tastaturfokus. Testen kontrollerer desuden alle 458 billedreferencer på de 28 ældre HTML-sider.
- Begge tilgængelighedserklæringer er kontrolleret ved 320 og 1280 CSS-pixels uden klippet indhold. Overskrifter ombrydes, og kontaktlinket til `johs.dahl@gmail.com` er kontrolleret i browseren.
- Visuelt kontrolleret laserfilguiden ved 320 pixels, mobilforsiden og desktopvisningen af en genereret guide. [Laserfilguide efter rettelse](.a11y-report/fix-tests/guide-til-laserfiler.html-320.png).
- JavaScript-syntaks og `git diff --check` er kontrolleret før publicering.

### Gennemgang af de 822 potentielle fund

| IBM-regel | Antal | Vurdering |
|---|---:|---|
| Fokusmarkering | 423 | Browsermåling fandt en synlig indikator på 243 direkte matchende elementer. De øvrige 180 er tilfældigt genererede SVG-vægge i Labyrintværkstedet; alle bruger samme testede fokusklasse og Enter-betjening. |
| Mulig overskrift | 138 | Grupperet kodegennemgang viser hovedsageligt kategorilabels og beholdere, som allerede indeholder en overskrift. Der er ikke foretaget en automatisk ændring af dokumentstrukturen; semantikken bør indgå i den fortsatte manuelle indholdsgennemgang. |
| Element skjult indtil fokus | 75 | Alle 75 bliver synlige, når de modtager tastaturfokus. |
| Mulig liste | 47 | 29 er enkeltstående billedtekster, og 18 er nummererede sektionsoverskrifter. De er gennemgået som tekst/overskrifter, ikke lister. |
| Farve kan være eneste signal | 45 | Kræver fortsat visuel kontrol af tilstande og forced-colors. IBM rejser kontrollen én gang pr. stylesheet eller side frem for på et bestemt dokumenteret brud. |
| Fokus kan være dækket | 26 | Alle 26 var synlige og udækkede i browsermålingen ved fokus. |
| Synlig label | 25 | 17 er Vektor-Viktors ikonknapper med navn, titel og tooltip; 8 er WeDo-felter med tilgængeligt navn og synlig blok-/enhedskontekst. Om den synlige kontekst er tilstrækkelig, beholdes som manuel vurdering. |
| Sensorisk formulering | 23 | Kræver redaktionel gennemgang, især ældre engelske guides med ord som “below”, “left” og “right”. |
| Alternativ til træk | 13 | WeDo har klik for at tilføje samt pileknapper til at flytte, indlejre og flytte blokke ud. Arbejdsgangen består browsertesten uden træk. |
| Tekst med viewport-enheder | 6 | Faktisk tekstforstørrelse til 200 % mangler fortsat manuel kontrol på de seks sider. |
| Spring gentaget indhold over | 1 | Den selvstændige moving-head-komponent under `assets/` indeholder kun ét hovedområde og ingen gentaget navigation. |

De 180 manuelle kontroller består primært af 88 baggrundsbilledkontroller og 80 high-contrast-kontroller. De resterende 12 vedrører native downloadlinks og ældre musehændelser med tilføjet tastaturalternativ.

### Stadig åbent

De 822 potentielle fund er grupperet og teknisk vurderet, men de åbne punkter ovenfor er ikke en afsluttet manuel WCAG-evaluering. Faktisk skærmlæser, 200 % tekstforstørrelse, alle zoom-/højkontrasttilstande, alle redigerings- og eksportforløb, WeDo med en fysisk Bluetooth-hub samt eksterne tjenester mangler fuld test. Den offentlige erklæring bør derfor fortsat beskrive begrænsninger frem for fuld overensstemmelse.

[Opdateret side-for-side-oversigt](.a11y-report/fix-tests/page-status.md) viser aktuelle tal. Resten af denne fil er den oprindelige vurdering **før rettelserne**, bevaret som sammenligningsgrundlag.

---

## Oprindelig konklusion før rettelser

Sitet kan på det foreliggende grundlag **ikke erklæres fuldt i overensstemmelse med WCAG 2.2 AA**. Der er konkrete barrierer i kontrast, feltnavne og tilpasning til smalle skærme. Fælles skabelonproblemer går igen på mange sider. Online tools har nu nul IBM-konstaterede fejl i begge sprogversioner, men det er ikke ensbetydende med, at alle WCAG-krav er opfyldt.

Dette er en teknisk vurdering af hele projektets HTML-indhold med automatiseret screening af alle sider og dybere stikprøver. Det er **ikke en afsluttet manuel konformitetsevaluering eller certificering**. Ikke-testede kriterier er ikke godkendt. Ingen sider er ændret som led i denne vurdering; WeDo er alene undersøgt og skal efter ejerens ønske forblive uændret.

## Omfang og metode

- 88 HTML-filer: 29 i roden, 23 under `en/`, 35 under `old/` og 1 under `assets/`.
- Ny IBM Equal Access-scanning med accessibility-checker 4.0.34, politik `IBM_Accessibility`, af den aktuelle arbejdsmappe. Alle 88 rapporter blev dannet. Scanneren afsluttede med fejlkode, fordi der er fund; dette var ikke en fejlfri scanning.
- Browser: Chrome/154.0.8037.57, headless Chromium på Linux.
- Browserkontrol af alle 88 sider på en lokal HTTP-server ved 1280, 375 og 320 CSS-pixels: struktur, billedtekster, elementer uden for visningen, JavaScript-fejl og måling efter øget tekstafstand.
- Browserkontrollen blokerede eksterne forespørgsler for reproducerbarhed. Derfor er eksterne skrifter, indlejrede tjenester og eksternt afhængige funktioner ikke dækket af denne del. IBM-scanningen havde netadgang og kørte via lokale fil-URL'er.
- Stikprøver af de første 16 tabulatortrin, browserens tilgængelighedstræ og emuleret forced-colors på `index.html`, begge Online tools-sider, `laser-aeon.html`, `garn-bandit.html` og `vektor-viktor.html`.
- Visuel gennemgang af udvalgte mobilskærmbilleder og højkontrastvisningen af Online tools. En tilgængelighedstræ-inspektion er ikke en test med NVDA, VoiceOver eller anden skærmlæser.
- Tidligere særskilt tastaturtest af begge Online tools-dialoger: Enter/Space åbner; fokus flyttes ind; Tab bliver i dialogen; Escape og lukkeknap lukker; fokus returnerer; springlink flytter fokus til hovedindhold.
- 320 CSS-pixels bruges som reflow-stikprøve, svarende til den tilgængelige bredde ved 400 % zoom fra 1280 pixels. Det er ikke en egentlig browserzoomtest. 200 % tekstforstørrelse og fuld kontrol af tekstafstand mangler.

## Samlede IBM-resultater

| Kategori | Antal |
|---|---:|
| violation | 351 |
| potentialviolation | 1329 |
| manual | 195 |
| recommendation | 8 |

Tallene er fundforekomster, ikke antal unikke WCAG-brud. IBM-regler om eksempelvis landmarks og navngivning må vurderes i sammenhæng; de svarer ikke automatisk én til én til WCAG-fejl. De 367 tidligere konstaterede fund er reduceret til 351 efter Online tools-rettelserne.

## Prioriterede fund og næste handling

| Prioritet | Område | Evidens og vurdering | Næste handling / WCAG |
|---|---|---|---|
| P1 | Guide til laserfiler, dansk og engelsk | Ved 320 pixels ligger brødtekst og overskrifter uden for visningen. Dansk side visuelt bekræftet: linjerne klippes i højre side. Engelsk har tilsvarende målte udløb. | Ret grid-/minimumsbredder og verificér hele siden ved 320 pixels. 1.4.10. |
| P1 | Garn Bandit | IBM finder 10 kontrastforekomster og manglende navn på filinput. Filinput får tastaturfokus, men er `opacity: 0`; uploadområdet har ikke en tilsvarende fokusmarkering. | Tilføj label og synligt `:focus-within` på uploadområdet; ret kontraster. 1.4.3, 2.4.7, 3.3.2, 4.1.2. |
| P1, låst | WeDo-blokværksted | 41 IBM-fejl, bl.a. kontrast og navnløse indstillinger. Trækfunktioner og hardwareforløb er ikke fuldt afprøvet. | Dokumentér kendte begrænsninger; ændr ikke siden. Undersøg tilgængelig alternativ arbejdsgang. 1.4.3, 3.3.2, 4.1.2; 2.1.1/2.5.7 kræver funktionstest. |
| P1, afklaring | Vektor-Viktor og Garn Bandits redigering | Tegneflader og grafisk redigering kræver særskilt test. Garn Bandits kildekode indeholder musebaseret pinredigering. En startside-scanning dækker ikke redigeringsforløbet. | Gennemfør import → redigering → eksport med tastatur og skærmlæser; verificér alternativer til træk og grafiske handlinger. 2.1.1, 2.5.7, 4.1.2. |
| P2 | Fælles mobilnavigation | Menuen ruller vandret. Fokus flytter rulningen, men nogle links er delvist klippet ved 320 pixels (fx “The Heads” på Online tools). Dette er ikke i sig selv bevis for fuldt skjult fokus. | Gør alle aktive menupunkter fuldt synlige; test Tab/Shift+Tab og berøring. Vurder 1.4.10 og 2.4.11. |
| P2 | Fælles logo-/hjemlinks | 44 IBM-forekomster hvor tilgængeligt navn ikke indeholder synlig linktekst. Online tools og dansk forside er allerede rettet. | Sørg for, at “FabLab Guides” indgår i navnet, eller brug synlig tekst som navn. 2.5.3. |
| P2 | Sideområder og navigation | 140 landmark-fund, 40 unavngivne supplerende områder og 34 manglende springlinks. Ikke alle landmark-fund er selvstændige WCAG-brud. | Kontrollér hovedindhold, overskrifter og mulighed for at springe gentaget navigation over. 1.3.1, 2.4.1. |
| P2 | Ældre sider og indlejret indhold | Manglende titler/sprog, fokusérbare elementer uden passende rolle og en iframe uden titel findes i scanningen. | Gennemgå de konkrete sider i tabellen nedenfor; test faktisk navigation og semantik. 2.4.2, 3.1.1, 4.1.2. |
| P3 | Tilgængelighedserklæring | Erklæringen beskriver generelle begrænsninger; denne vurdering giver mere konkret evidens. Ingen ændring publiceret. | Opdatér efter prioriterede rettelser og manuelle tests; angiv præcist omfang og kendte begrænsninger. |

Mobilproblemet i laserfilguiden kan ses i [skærmbilledet](.a11y-report/review-evidence/reflow-guide-til-laserfiler.html.png). [Online tools ved 320 pixels](.a11y-report/review-evidence/reflow-online-tools.html.png) viser også trang placering af billede og titel; kontrollér lange værktøjsnavne i begge sprogversioner.

## De resterende fund på Online tools

| IBM-regel | Dansk / engelsk | Vurdering |
|---|---:|---|
| `style_focus_visible` | 25 / 23 | Fokusmarkering er implementeret. Tastaturdialogen er afprøvet, men hvert billede i alle visninger er ikke visuelt godkendt. |
| `element_tabbable_visible` | 1 / 1 | Gælder springlink. Fokus og aktivering er testet; normal skjult placering er tilsigtet. |
| `style_color_misuse` | 1 / 1 | Indhold og links har tekst; ingen farveafhængig instruktion identificeret i gennemgangen. |
| `text_sensory_misuse` | 0 / 1 | “-shaped” beskriver et produktmønster, ikke en instruktion der kun kan følges visuelt. Ingen konkret barriere identificeret. |
| Manuelle baggrunds-/højkontrastkontroller | 2 / 2 | Gradienter er dekorative; dansk sides tekst og links kunne ses i emuleret højkontrast. Faktisk Windows-højkontrast og alle billedtilstande mangler. |

Nul IBM-fejl ændrer ikke de åbne mobil- og hjælpemiddeltests.

## Hvad der mangler før en fuld konformitetsvurdering

1. Afklar det publicerede omfang: `old/`, demoer og `assets/` er medtaget her, men publicering og adgang fra det offentlige site er ikke verificeret. De må ikke udelades alene, fordi de er gamle.
2. Test med en rigtig skærmlæser, fx NVDA/Firefox og VoiceOver/Safari: læserækkefølge, landmarks, links, billedtekster, dialoger, felter og statusbeskeder.
3. Gennemfør alle centrale brugerforløb: billedkarusseller, formularer, import/eksport, fejltilstande, værktøjer og eventuel hardware. WeDo er fortsat uden redigeringstilladelse.
4. Kontrollér zoom 200/400 %, tekstafstand uden tab af indhold, touchmål og kontrast på alle tilstande, samt faktisk højkontrast. Nuværende tekstafstandsmåling alene kan ikke godkende 1.4.12.
5. Gennemgå medier, dokumenter og eksterne indlejringer samt alternative teksters meningsfuldhed. Automatiske alt-attributkontroller er utilstrækkelige.
6. Registrér resultat for hvert relevant A/AA-kriterium og fuldfør rettelser/gentest. Ingen samlet procentscore gives, da testdækningen ikke berettiger det.

## Regler med konstaterede IBM-fund

| Regel | Forekomster |
|---|---:|
| `aria_content_in_landmark` | 140 |
| `label_name_visible` | 44 |
| `aria_complementary_labelled` | 40 |
| `element_tabbable_role_valid` | 34 |
| `skip_main_exists` | 34 |
| `text_contrast_sufficient` | 23 |
| `input_label_exists` | 13 |
| `aria_article_label_unique` | 6 |
| `svg_graphics_labelled` | 6 |
| `html_lang_exists` | 4 |
| `page_title_exists` | 4 |
| `aria_attribute_valid` | 2 |
| `frame_title_exists` | 1 |

## Side-for-side: samtlige 88 HTML-filer

V = IBM-konstaterede fund, P = potentielle fund, M = manuelle kontroller. Tabellen er sorteret efter V og P; prioriteringen ovenfor tager også brugerimpact og fælles rettelser i betragtning. Side med 0 fund er ikke nødvendigvis WCAG-godkendt. Alle sider har været igennem browserkontrollen; komplette målinger ligger i evidensfilerne.

| Side | V | P | M | Konstaterede regeltyper |
|---|---:|---:|---:|---|
| [wedo-blokvaerksted.html](wedo-blokvaerksted.html) (må ikke ændres) | 41 | 78 | 2 | `aria_content_in_landmark` × 20; `text_contrast_sufficient` × 8; `aria_complementary_labelled` × 1; `input_label_exists` × 12 |
| [garn-bandit.html](garn-bandit.html) | 13 | 4 | 1 | `text_contrast_sufficient` × 10; `aria_content_in_landmark` × 2; `input_label_exists` × 1 |
| [vektor-viktor.html](vektor-viktor.html) | 12 | 63 | 3 | `svg_graphics_labelled` × 6; `aria_content_in_landmark` × 5; `text_contrast_sufficient` × 1 |
| [en/moving-head.html](en/moving-head.html) | 7 | 4 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_attribute_valid` × 1; `aria_article_label_unique` × 3; `aria_complementary_labelled` × 1 |
| [moving-head.html](moving-head.html) | 7 | 4 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_attribute_valid` × 1; `aria_article_label_unique` × 3; `aria_complementary_labelled` × 1 |
| [en/prusa-xl.html](en/prusa-xl.html) | 5 | 35 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [prusa-xl.html](prusa-xl.html) | 5 | 35 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [canvasworkspace.html](canvasworkspace.html) | 5 | 34 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [en/canvasworkspace.html](en/canvasworkspace.html) | 5 | 34 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [en/prusa-mk3s.html](en/prusa-mk3s.html) | 5 | 30 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [en/prusa-mk4.html](en/prusa-mk4.html) | 5 | 29 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [prusa-mk3s.html](prusa-mk3s.html) | 5 | 29 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [prusa-mk4.html](prusa-mk4.html) | 5 | 29 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [en/prusamini.html](en/prusamini.html) | 5 | 24 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [prusamini.html](prusamini.html) | 5 | 24 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 2 |
| [old/en/laser.html](old/en/laser.html) | 5 | 11 | 4 | `skip_main_exists` × 1; `aria_content_in_landmark` × 4 |
| [old/laser.html](old/laser.html) | 5 | 10 | 4 | `skip_main_exists` × 1; `aria_content_in_landmark` × 4 |
| [en/gcc-expert24.html](en/gcc-expert24.html) | 4 | 29 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [gcc-expert24.html](gcc-expert24.html) | 4 | 29 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [en/laser-lightburn.html](en/laser-lightburn.html) | 4 | 24 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [laser-lightburn.html](laser-lightburn.html) | 4 | 24 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [en/surecutalot.html](en/surecutalot.html) | 4 | 23 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [surecutalot.html](surecutalot.html) | 4 | 23 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [en/guide-to-laser-files.html](en/guide-to-laser-files.html) | 4 | 22 | 5 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 2 |
| [en/prusaslicer.html](en/prusaslicer.html) | 4 | 21 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [prusaslicer.html](prusaslicer.html) | 4 | 21 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [guide-til-laserfiler.html](guide-til-laserfiler.html) | 4 | 19 | 5 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 2 |
| [en/wazer.html](en/wazer.html) | 4 | 17 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [wazer.html](wazer.html) | 4 | 17 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [en/laser-aeon.html](en/laser-aeon.html) | 4 | 16 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [en/laser-eduard.html](en/laser-eduard.html) | 4 | 16 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [laser-aeon.html](laser-aeon.html) | 4 | 16 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [laser-eduard.html](laser-eduard.html) | 4 | 16 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1; `element_tabbable_role_valid` × 1 |
| [old/en/prusa-xl.html](old/en/prusa-xl.html) | 4 | 9 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/en/canvasworkspace.html](old/en/canvasworkspace.html) | 4 | 8 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/en/prusa-mk4.html](old/en/prusa-mk4.html) | 4 | 8 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/en/prusamini.html](old/en/prusamini.html) | 4 | 8 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/en/prusa-mk3s.html](old/en/prusa-mk3s.html) | 4 | 7 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/prusa-mk3s.html](old/prusa-mk3s.html) | 4 | 7 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/prusa-mk4.html](old/prusa-mk4.html) | 4 | 7 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/prusa-xl.html](old/prusa-xl.html) | 4 | 7 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/prusamini.html](old/prusamini.html) | 4 | 7 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [old/canvasworkspace.html](old/canvasworkspace.html) | 4 | 5 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 3 |
| [en/index.html](en/index.html) | 3 | 39 | 4 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [en/tekstilvinyl.html](en/tekstilvinyl.html) | 3 | 17 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [tekstilvinyl.html](tekstilvinyl.html) | 3 | 15 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [en/serigrafi.html](en/serigrafi.html) | 3 | 12 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [serigrafi.html](serigrafi.html) | 3 | 12 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [brother-scanncut.html](brother-scanncut.html) | 3 | 10 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [en/brother-scanncut.html](en/brother-scanncut.html) | 3 | 10 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [en/laser-epilog.html](en/laser-epilog.html) | 3 | 10 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [laser-epilog.html](laser-epilog.html) | 3 | 10 | 3 | `aria_content_in_landmark` × 1; `label_name_visible` × 1; `aria_complementary_labelled` × 1 |
| [old/en/laser-aeon.html](old/en/laser-aeon.html) | 3 | 7 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/laser-eduard.html](old/en/laser-eduard.html) | 3 | 7 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/laser-lightburn.html](old/en/laser-lightburn.html) | 3 | 7 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/laser-aeon.html](old/laser-aeon.html) | 3 | 6 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/laser-eduard.html](old/laser-eduard.html) | 3 | 6 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/laser-lightburn.html](old/laser-lightburn.html) | 3 | 6 | 2 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/gcc-expert24.html](old/en/gcc-expert24.html) | 3 | 5 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/prusaslicer.html](old/en/prusaslicer.html) | 3 | 5 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/surecutalot.html](old/en/surecutalot.html) | 3 | 5 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/en/index.html](old/en/index.html) | 3 | 4 | 2 | `aria_content_in_landmark` × 2; `text_contrast_sufficient` × 1 |
| [old/gcc-expert24.html](old/gcc-expert24.html) | 3 | 4 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/index.html](old/index.html) | 3 | 4 | 2 | `aria_content_in_landmark` × 2; `text_contrast_sufficient` × 1 |
| [old/surecutalot.html](old/surecutalot.html) | 3 | 4 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/prusaslicer.html](old/prusaslicer.html) | 3 | 3 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 2 |
| [old/brother-scanncut.html](old/brother-scanncut.html) | 3 | 1 | 0 | `html_lang_exists` × 1; `page_title_exists` × 1; `skip_main_exists` × 1 |
| [old/en/brother-scanncut.html](old/en/brother-scanncut.html) | 3 | 1 | 0 | `html_lang_exists` × 1; `page_title_exists` × 1; `skip_main_exists` × 1 |
| [old/en/google6fee8520323cc3a8.html](old/en/google6fee8520323cc3a8.html) | 3 | 1 | 0 | `html_lang_exists` × 1; `page_title_exists` × 1; `skip_main_exists` × 1 |
| [old/en/under-udvikling.html](old/en/under-udvikling.html) | 3 | 1 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 1; `text_contrast_sufficient` × 1 |
| [old/google6fee8520323cc3a8.html](old/google6fee8520323cc3a8.html) | 3 | 1 | 0 | `html_lang_exists` × 1; `page_title_exists` × 1; `skip_main_exists` × 1 |
| [old/under-udvikling.html](old/under-udvikling.html) | 3 | 1 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 1; `text_contrast_sufficient` × 1 |
| [en/maskiner.html](en/maskiner.html) | 2 | 45 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [maskiner.html](maskiner.html) | 2 | 44 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [en/materialer.html](en/materialer.html) | 2 | 10 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [materialer.html](materialer.html) | 2 | 9 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [en/tilgaengelighedserklaering.html](en/tilgaengelighedserklaering.html) | 2 | 4 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [old/hemmelig.html](old/hemmelig.html) | 2 | 4 | 1 | `skip_main_exists` × 1; `frame_title_exists` × 1 |
| [tilgaengelighedserklaering.html](tilgaengelighedserklaering.html) | 2 | 3 | 2 | `aria_content_in_landmark` × 1; `label_name_visible` × 1 |
| [old/en/laser-epilog.html](old/en/laser-epilog.html) | 2 | 1 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 1 |
| [old/laser-epilog.html](old/laser-epilog.html) | 2 | 1 | 1 | `skip_main_exists` × 1; `aria_content_in_landmark` × 1 |
| [materiale-tykkelse-skalering.html](materiale-tykkelse-skalering.html) | 1 | 13 | 2 | `label_name_visible` × 1 |
| [assets/moving-head/moving-head.html](assets/moving-head/moving-head.html) | 1 | 1 | 1 | `skip_main_exists` × 1 |
| [index.html](index.html) | 0 | 38 | 5 | Ingen |
| [online-tools.html](online-tools.html) | 0 | 27 | 2 | Ingen |
| [en/online-tools.html](en/online-tools.html) | 0 | 26 | 2 | Ingen |
| [404.html](404.html) | 0 | 4 | 3 | Ingen |
| [cursor-character-demo.html](cursor-character-demo.html) | 0 | 2 | 1 | Ingen |

## Reproducerbarhed og kilder

- [Ny IBM-scanning](.a11y-report/review-full/) — detaljer indeholder DOM-sti, snippet, regel og scannerens forklaring for hvert fund.
- [Browsermålinger for alle sider](.a11y-report/review-evidence/fablab-browser-audit.json).
- [Tastaturstikprøver og tilgængelighedstræ](.a11y-report/review-evidence/fablab-detail.json).
- [Mobilnavigationens fokuspositioner](.a11y-report/review-evidence/fablab-reflow.json).
- Testscripts og skærmbilleder er gemt i `.a11y-report/review-evidence/`. Scripts bruger den lokale Puppeteer-installation og server på port 8765; de skal tilpasses ved kørsel på en anden maskine.
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) er grundlaget for kriteriehenvisninger.
- [W3C: Conformance Evaluation and Reports](https://www.w3.org/WAI/test-evaluate/conformance/) beskriver systematisk evaluering og rapportering.
