window.betaGuideData = {
    "prusaslicer": {
        slug: "prusaslicer",
        title: "PrusaSlicer",
        category: "3D-print",
        eyebrow: "Softwareguide",
        icon: "../billeder/ikoner/prusa-slicer.png",
        description: "Forbered dine 3D-print i PrusaSlicer med et mere overskueligt flow fra STL-fil til eksporteret G-code.",
        shortDescription: "Fra STL til eksport klar på få trin.",
        highlights: ["10 trin", "Slicerworkflow", "Eksport til SD-kort"],
        sections: [
            {
                tag: "Workflow",
                title: "Forbered printfilen",
                description: "Guiden samler hele arbejdsforløbet i PrusaSlicer, så det er tydeligt, hvilke valg der skal træffes før printstart.",
                meta: "Software",
                slides: [
                    { src: "../billeder/prusa-mk3s/prusaslicer/open_prusaslicer.avif", caption: "1. Åbn PrusaSlicer" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/choose_stl_file.avif", caption: "2. Vælg din STL-fil" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/choose_printer.avif", caption: "3. Vælg printerprofil (f.eks. MK3S)" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/choose_fillament_slicer.avif", caption: "4. Vælg korrekt filamentprofil" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/choose_layer_height.avif", caption: "5. Vælg laghøjde" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/Slice_3D_print.avif", caption: "6. Slice og se preview" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/choose_support.avif", caption: "7. Tilføj support hvis nødvendigt" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/check_weight_print.avif", caption: "8. Kontroller printtid og vægt" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/Export_g_code.avif", caption: "9. Eksporter G-code til SD-kort" },
                    { src: "../billeder/prusa-mk3s/prusaslicer/eject_drive.avif", caption: "10. Fjern sikkert SD-kortet" }
                ]
            }
        ]
    },
    "prusamini": {
        slug: "prusamini",
        title: "Prusa Mini",
        category: "3D-print",
        eyebrow: "Printerguide",
        icon: "../billeder/ikoner/prusa-mini-fritlagt.png",
        description: "En kompakt 3D-printer med to klassiske workflows: skift filament og start et nyt print sikkert op.",
        shortDescription: "Skift filament og start print på Prusa Mini.",
        highlights: ["2 workflows", "Begyndervenlig", "Trin-for-trin"],
        sections: [
            {
                tag: "Filament",
                title: "Skift filament",
                description: "Brug denne sektion, når du skal loade et nyt filament på printeren.",
                meta: "6 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/01_taendprinter.jpeg", caption: "1. Tænd printeren" },
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/02_vaelgfillament.jpeg", caption: "2. Vælg 'Filament' i menuen" },
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/03_loadfillament.jpeg", caption: "3. Vælg 'Load Filament'" },
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/04_indsaetfillament.jpeg", caption: "4. Indsæt filamentet i extruderen" },
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/05_kontrolleratderkommerfillament.jpeg", caption: "5. Kontrollér at der kommer filament ud" },
                    { src: "../billeder/3dprinter/prusamini/skift_fillament/06_korrektfillament.jpeg", caption: "6. Klar til print" }
                ]
            },
            {
                tag: "Printstart",
                title: "Start print",
                description: "Et kort workflow til klargøring, valg af fil og kontrol af første lag.",
                meta: "4 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusamini/start_print/00_renspladen.jpeg", caption: "1. Rens byggepladen" },
                    { src: "../billeder/3dprinter/prusamini/start_print/01_indsaetusbogprint.jpeg", caption: "2. Indsæt USB-stik med G-code" },
                    { src: "../billeder/3dprinter/prusamini/start_print/02_vaelgfil.jpeg", caption: "3. Vælg filen på skærmen" },
                    { src: "../billeder/3dprinter/prusamini/start_print/03_trykprint.jpeg", caption: "4. Tryk 'Print' og følg første lag" }
                ]
            }
        ]
    },
    "prusa-mk3s": {
        slug: "prusa-mk3s",
        title: "Prusa MK3S",
        category: "3D-print",
        eyebrow: "Printerguide",
        icon: "../billeder/ikoner/prusa-mk3s-fritlagt.png",
        description: "Prusa MK3S er en solid allround-printer. Beta-guiden samler de vigtigste arbejdsgange i et roligere layout.",
        shortDescription: "Skift filament og start print på MK3S.",
        highlights: ["2 workflows", "Pålidelig printer", "Første lag i fokus"],
        sections: [
            {
                tag: "Filament",
                title: "Skift filament",
                description: "Hele unload og load-forløbet samlet i ét overskueligt forløb.",
                meta: "9 trin",
                slides: [
                    { src: "../billeder/prusa-mk3s/skift filament/main_screen.avif", caption: "1. Startskærm: Vælg 'Unload Filament'" },
                    { src: "../billeder/prusa-mk3s/skift filament/unload_filament.avif", caption: "2. Vælg 'Unload Filament' i menuen" },
                    { src: "../billeder/prusa-mk3s/skift filament/filament_choose.avif", caption: "3. Vælg filamenttype, f.eks. PLA" },
                    { src: "../billeder/prusa-mk3s/skift filament/preheat_to_unload.avif", caption: "4. Printeren varmer op til korrekt temperatur" },
                    { src: "../billeder/prusa-mk3s/skift filament/press_knob_unload.avif", caption: "5. Tryk på knappen for at bekræfte" },
                    { src: "../billeder/prusa-mk3s/skift filament/hotend.avif", caption: "6. Træk forsigtigt filamentet ud, når det er opvarmet" },
                    { src: "../billeder/prusa-mk3s/skift filament/extrude.avif", caption: "7. Indsæt nyt filament og tryk på 'Load Filament'" },
                    { src: "../billeder/prusa-mk3s/skift filament/correct_extrude.avif", caption: "8. Kontroller at filamentet ekstruderes korrekt" },
                    { src: "../billeder/prusa-mk3s/skift filament/printer_ok.avif", caption: "9. Bekræft og afslut proceduren" }
                ]
            },
            {
                tag: "Printstart",
                title: "Start print",
                description: "Klargøring, filvalg og første lag i et kort, sikkert workflow.",
                meta: "6 trin",
                slides: [
                    { src: "../billeder/prusa-mk3s/start_print/kontrol_start_printer.avif", caption: "1. Kontroller at printeren er tændt og klar" },
                    { src: "../billeder/prusa-mk3s/start_print/wipe_surface.avif", caption: "2. Rengør byggepladen med isopropylalkohol" },
                    { src: "../billeder/prusa-mk3s/start_print/insert_SD_kort.avif", caption: "3. Indsæt SD-kortet med din .gcode-fil" },
                    { src: "../billeder/prusa-mk3s/start_print/choose_file.avif", caption: "4. Vælg den fil du vil printe fra menuen" },
                    { src: "../billeder/prusa-mk3s/start_print/printer_varmer_start.avif", caption: "5. Printeren varmer op og starter print" },
                    { src: "../billeder/prusa-mk3s/start_print/kontrol_first_lag.avif", caption: "6. Hold øje med første lag og justér Z-offset hvis nødvendigt" }
                ]
            }
        ]
    },
    "prusa-mk4": {
        slug: "prusa-mk4",
        title: "Prusa MK4",
        category: "3D-print",
        eyebrow: "Printerguide",
        icon: "../billeder/ikoner/prusa-mk4-fritlagt.png",
        description: "MK4-guiden samler load af filament og printstart i samme visuelle system som resten af betauniverset.",
        shortDescription: "Filamentskift og printstart på MK4.",
        highlights: ["2 workflows", "Automatiseret printer", "USB og display"],
        sections: [
            {
                tag: "Filament",
                title: "Skift filament",
                description: "Følg skærmen trin for trin fra filamentmenu til korrekt indsat materiale.",
                meta: "6 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/01_vaelgfillament.jpeg", caption: "1. Vælg 'Filament' i menuen" },
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/02_loadfillament.jpeg", caption: "2. Vælg 'Load Filament'" },
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/03_vaelgtype.jpeg", caption: "3. Vælg filamenttype, f.eks. PLA" },
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/04_indsaetfillament.jpeg", caption: "4. Indsæt filamentet i extruderen" },
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/05_trykfortsaet.jpeg", caption: "5. Tryk 'Fortsæt' når filamentet er sat i" },
                    { src: "../billeder/3dprinter/prusamk4/skift_fillament/06_kontrollerfarveskift.jpeg", caption: "6. Kontrollér at filamentet er korrekt indsat og farven er skiftet" }
                ]
            },
            {
                tag: "Printstart",
                title: "Start print",
                description: "Et udvidet printflow med valg af korrekt fil, bekræftelse og kontrol af første lag.",
                meta: "9 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusamk4/start_print/00_rensprintplade.jpeg", caption: "1. Rens byggepladen" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/01_indsaetusbogstart.jpeg", caption: "2. Indsæt USB med G-code. Den nyeste fil indlæses automatisk." },
                    { src: "../billeder/3dprinter/prusamk4/start_print/02_vedforkertfil.jpeg", caption: "3. Hvis det er rigtig gå til billed 6. Hvis ikke tryk på 'Back'" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/03_trykprint.jpeg", caption: "4. Tryk 'Print'" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/04_vaelgfil.jpeg", caption: "5. Vælg den ønskede fil" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/05_trykprint.jpeg", caption: "6. Tryk 'Print' igen for at bekræfte" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/06_ledprintstart.jpeg", caption: "7. LED lyser op ved printstart" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/07_kontrollerfoerstelag.jpeg", caption: "8. Hold øje med første lag og justér om nødvendigt" },
                    { src: "../billeder/3dprinter/prusamk4/start_print/08_displayskifttid.jpeg", caption: "9. Display viser estimeret tid og status" }
                ]
            }
        ]
    },
    "prusa-xl": {
        slug: "prusa-xl",
        title: "Prusa XL",
        category: "3D-print",
        eyebrow: "Printerguide",
        icon: "../billeder/ikoner/prusa-xl-fritlagt.png",
        description: "Prusa XL har flere værktøjer og flere valgmuligheder. Beta-guiden gør workflows med filament og printstart mere overskuelige.",
        shortDescription: "Multi-tool workflow på Prusa XL.",
        highlights: ["2 workflows", "Multi-tool", "USB og tool-valg"],
        sections: [
            {
                tag: "Filament",
                title: "Skift filament",
                description: "Guiden viser både fysisk placering af ruller og den efterfølgende load-procedure på displayet.",
                meta: "12 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6315.jpeg", caption: "1. Der kan være 3 ruller filament på venstre side og 2 på højre. Fremgangsmåden for load er den samme for alle 5." },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6316.jpeg", caption: "2. Spoleholderne kan trækkes ud hvis man har brug for at have breddere ruller på." },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6318.jpeg", caption: "3. Filamentet føres ind i hullerne mærket 1 til 5. Nr.1 er den hotend længst til venstre og 5 er den længst til højre." },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6320ny.jpg", caption: "4. Filamentet skal skubbes helt ned så den rammer sensoren i hotenden. På billedet her er den ikke langt nok nede." },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6322.jpeg", caption: "5. Vælg fillament på displayet" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6323.jpeg", caption: "6. Vælg 'Load filament'" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6324.jpeg", caption: "7. Vælg hvilken hotend (Tool) der skal loades filament i" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6325.jpeg", caption: "8. Vælg type af filament" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6326.jpeg", caption: "9. Den valgt hotend hentes fra parkering" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6328.jpeg", caption: "10. Skub filamentet frem så sensoren bliver aktiveret og tryk på 'Continue'" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6329.jpeg", caption: "11. Når den har loaded filament. Kontroller at den gamle filament er byttet ud med den nye" },
                    { src: "../billeder/3dprinter/prusaxl/skift_fillament/IMG_6331.jpeg", caption: "12. Kontroller at der ikke sidder rester af gammel filament eller andet på hotenden" }
                ]
            },
            {
                tag: "Printstart",
                title: "Start print",
                description: "Fra USB-stik til valg af hotend og kontrol af første lag.",
                meta: "9 trin",
                slides: [
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6332.jpeg", caption: "1. Indsæt USB stikket" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6335.jpeg", caption: "2. Den nyeste fil på USB stikket hentes automatisk ind" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6336.jpeg", caption: "3. Vælg hvilken filament der passer til hvilken farve i filen fra sliceren. Er der kun en farve i filen gå til billede 5." },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6337.jpeg", caption: "4. Hvis farven er forkert i forhold til hvad man har sat i printeren eller mangler der at blive sat filament i en eller flere positioner skal dette rettes før du fortsætter." },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6339.jpeg", caption: "5. For at hente filen fra USB stikket tryk på 'Print'" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6340.jpeg", caption: "6. Vælg den fil man ønsker at printe" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6341.jpeg", caption: "7. Tryk 'Continue' hvis det er den rigtige fil" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6342.jpeg", caption: "8. Vælg hvilken hotend du vil printe med" },
                    { src: "../billeder/3dprinter/prusaxl/start_print/IMG_6345.jpeg", caption: "9. Kontroller at første lag sidder fast og er som det skal være" }
                ]
            }
        ]
    },
    "laser-lightburn": {
        slug: "laser-lightburn",
        title: "LightBurn",
        category: "Laserskærer",
        eyebrow: "Softwareguide",
        icon: "../billeder/ikoner/laser-lightburn.png",
        description: "Et samlet LightBurn-workflow fra import af tegning til framing og start af laseren.",
        shortDescription: "Kom sikkert fra tegning til skæring i LightBurn.",
        highlights: ["13 trin", "Softwareworkflow", "Klik for at forstørre"],
        sections: [
            {
                tag: "Workflow",
                title: "Arbejdsgangen i LightBurn",
                description: "Her er hele LightBurn-forløbet samlet, så nye brugere hurtigt kan se rækkefølgen i opsætningen.",
                meta: "Software",
                slides: [
                    { src: "../billeder/laser/lightburn/01tom_skaerm.jpeg", caption: "1. Start Lightburn eller vælg 'Ny' i fanen Filer" },
                    { src: "../billeder/laser/lightburn/02reset_to_default.jpeg", caption: "2. Gendan standardindstillinger hvis funktioner mangler" },
                    { src: "../billeder/laser/lightburn/03importer_tegning.jpeg", caption: "3. Importer tegning" },
                    { src: "../billeder/laser/lightburn/04farver.jpeg", caption: "4. Kontrollér at alle lag/farver du skal bruge er kommet med" },
                    { src: "../billeder/laser/lightburn/05vaelg_farve.jpeg", caption: "5. Vælg f.eks. skærelaget" },
                    { src: "../billeder/laser/lightburn/06skaering.jpeg", caption: "6. Vælg materiale og funktion i materialebiblioteket og tryk på Assign" },
                    { src: "../billeder/laser/lightburn/07fyld_gravering.jpeg", caption: "7. Fuld gravering = fyldt figur" },
                    { src: "../billeder/laser/lightburn/08linje_gravering.jpeg", caption: "8. Linjegravering = tom figur" },
                    { src: "../billeder/laser/lightburn/09skift_til_laser.jpeg", caption: "9. Skift til laser-visning" },
                    { src: "../billeder/laser/lightburn/10marker_hele_figuren.jpeg", caption: "10. Marker alt der skal skæres/graveres" },
                    { src: "../billeder/laser/lightburn/11saet_origin_ightburn.jpeg", caption: "11. Vælg origin i Lightburn" },
                    { src: "../billeder/laser/lightburn/12saet_origin_paa_laser.jpeg", caption: "12. Sæt samme origin fysisk på maskinen" },
                    { src: "../billeder/laser/lightburn/13frame_og_start_laser.jpeg", caption: "13. Brug Frame og start laseren" }
                ]
            }
        ]
    },
    "laser-eduard": {
        slug: "laser-eduard",
        title: "Eduard",
        category: "Laserskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/laser-eduard-fritlagt.png",
        description: "Højdeindstilling på Eduard forklaret i et kort, visuelt workflow.",
        shortDescription: "Sæt korrekt Z-højde på Eduard.",
        highlights: ["5 trin", "Højdeindstilling", "Klik for at forstørre"],
        sections: [
            {
                tag: "Fokus",
                title: "Sæt materialetykkelse på Eduard",
                description: "Brug fokusbrikken og Z/U-funktionen til at indstille korrekt arbejdshøjde før skæring.",
                meta: "Maskine",
                slides: [
                    { src: "../billeder/laser/hoejde_eduard/00materiale_i_maskine.jpeg", caption: "1. Læg materialet ind i maskinen" },
                    { src: "../billeder/laser/hoejde_eduard/01fokusbrik.jpeg", caption: "2. Placer fokusbrikken på materialet" },
                    { src: "../billeder/laser/hoejde_eduard/02tryk_zu.jpeg", caption: "3. Tryk på Z/U for at justere Z-aksen" },
                    { src: "../billeder/laser/hoejde_eduard/03saet_z_hoejde.jpeg", caption: "4. Brug piletasterne til at justere højden op og ned" },
                    { src: "../billeder/laser/hoejde_eduard/04korrekt_hoejde.jpeg", caption: "5. Når brikken netop passer til den riflede kant på laserhovedet, er højden korrekt" }
                ]
            }
        ]
    },
    "laser-aeon": {
        slug: "laser-aeon",
        title: "AEON",
        category: "Laserskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/laser-aeon-fritlagt.png",
        description: "En kort AEON-guide til korrekt fokus og auto focus-funktionen, samlet i samme beta-design som resten af guiderne.",
        shortDescription: "Sæt korrekt fokus på AEON-laseren.",
        highlights: ["5 trin", "Auto Focus", "Klik for at forstørre"],
        sections: [
            {
                tag: "Fokus",
                title: "Sæt materialetykkelse på AEON",
                description: "Få styr på forskellen mellem forkert og korrekt højde, og afslut med auto focus.",
                meta: "Maskine",
                slides: [
                    { src: "../billeder/laser/hoejde_aeon/00forkert.jpg", caption: "1. Forkert højde – fokuspennen er ikke indenfor materialet" },
                    { src: "../billeder/laser/hoejde_aeon/00rigtig.jpg", caption: "2. Korrekt højde – fokuspennen er indenfor materialet" },
                    { src: "../billeder/laser/hoejde_aeon/01saethoej.jpg", caption: "3. Tryk på Z/U tasten for at komme ind i menuen" },
                    { src: "../billeder/laser/hoejde_aeon/02saethoej.jpg", caption: "4. Brug piltasten til at vælge Auto Focus" },
                    { src: "../billeder/laser/hoejde_aeon/03saethoej.jpg", caption: "5. Tryk på Enter for at fokusere laseren" }
                ]
            }
        ]
    },
    "laser-epilog": {
        slug: "laser-epilog",
        title: "Epilog",
        category: "Laserskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/laser-epilog-fritlagt.png",
        description: "Epilog-guiden er endnu ikke udfyldt i den oprindelige version, men betaen reserverer allerede pladsen i samme designlinje som resten af sitet.",
        shortDescription: "Placeholder for kommende Epilog-guide.",
        highlights: ["Klargøres", "Samme designramme", "Klar til indhold"],
        sections: []
    },
    "brother-scanncut": {
        slug: "brother-scanncut",
        title: "Brother Scan'n'Cut",
        category: "Vinylskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/vinyl-brother-scanncut.png",
        description: "Den oprindelige side for Brother Scan'n'Cut er tom i repoet lige nu. Betaen viser derfor en forberedt, stylet plads til guiden.",
        shortDescription: "Placeholder for kommende Brother-guide.",
        highlights: ["Klargøres", "Original side er tom", "Klar til næste iteration"],
        sections: []
    },
    "canvasworkspace": {
        slug: "canvasworkspace",
        title: "CanvasWorkspace",
        category: "Vinylskærer",
        eyebrow: "Softwareguide",
        icon: "../billeder/ikoner/vinyl-brother-canvasworkspace.png",
        description: "CanvasWorkspace er delt op i to workflows: import af SVG og sporing af et billede. Beta-layoutet gør forskellen mellem dem tydeligere.",
        shortDescription: "Importer SVG eller spor et billede i CanvasWorkspace.",
        highlights: ["2 workflows", "Softwareguide", "Download til USB"],
        sections: [
            {
                tag: "Import",
                title: "Importer SVG",
                description: "Et trin-for-trin forløb fra nyt dokument til filen er klar på USB-stick.",
                meta: "9 trin",
                slides: [
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/01.canvasworkspace.jpeg", caption: "1. Åbn Canvas Workspace" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/02.nytdokument.jpeg", caption: "2. Opret et nyt dokument" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/03.grundskærm.jpeg", caption: "3. Startskærm vises" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/04.navngivdokument.jpeg", caption: "4. Navngiv dokumentet" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/05.importersvg.jpeg", caption: "5. Tryk på 'Importer SVG'" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/06.aabensvg.jpeg", caption: "6. Vælg SVG-fil" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/07.placerbillede.jpeg", caption: "7. Placer billedet på skærmen" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/08.downloadknap.jpeg", caption: "8. Tryk på download-knappen" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/importersvg/09.gempåcomputer.jpeg", caption: "9. Gem filen på USB stick" }
                ]
            },
            {
                tag: "Sporing",
                title: "Spor billede",
                description: "Brug funktionen 'Spor billede' når du vil omdanne et bitmap til skæresti.",
                meta: "11 trin",
                slides: [
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/01.canvasworkspace.jpeg", caption: "1. Åbn Canvas Workspace" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/02.nytdokument.jpeg", caption: "2. Opret et nyt dokument" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/03.grundskærm.jpeg", caption: "3. Startskærm vises" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/04.navngivdokument.jpeg", caption: "4. Navngiv dokumentet" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/05.sporbillede.jpeg", caption: "5. Vælg 'Spor billede'" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/06.aabenbillede.jpeg", caption: "6. Åbn billedfil" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/07.vaelgcolor.jpeg", caption: "7. Vælg farvevalg til sporing" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/08.preview.jpeg", caption: "8. Forhåndsvis sporing" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/09.skygge.jpeg", caption: "9. Vælg altid nej her" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/10.download.jpeg", caption: "10. Download projektet" },
                    { src: "../billeder/vinylskaerer/canvas_workspace/sporbillede/11.vaelgcomputer.jpeg", caption: "11. Gem på et USB stick" }
                ]
            }
        ]
    },
    "gcc-expert24": {
        slug: "gcc-expert24",
        title: "GCC Expert 24 II",
        category: "Vinylskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/vinyl-gcc-expert24.png",
        description: "Et komplet maskinworkflow fra slukket maskine til færdig udtaget vinylrulle.",
        shortDescription: "Opsæt og kør vinyl i GCC Expert 24 II.",
        highlights: ["18 trin", "Maskinworkflow", "Origin og online/offline"],
        sections: [
            {
                tag: "Workflow",
                title: "Klargør og skær på GCC Expert 24 II",
                description: "Guiden samler hele arbejdsgangen, så brugeren kan følge den samme rækkefølge hver gang.",
                meta: "Maskine",
                slides: [
                    { src: "../billeder/vinylskaerer/gcc/01.slukmaskinen.jpeg", caption: "1. Sluk maskinen" },
                    { src: "../billeder/vinylskaerer/gcc/02.placerrullestativbag.jpeg", caption: "2. Placer rullestativ bag maskinen" },
                    { src: "../billeder/vinylskaerer/gcc/03.laegvinyliholder.jpeg", caption: "3. Læg vinyl i rullestativ" },
                    { src: "../billeder/vinylskaerer/gcc/04.skubvinylind.jpeg", caption: "4. Skub vinylen ind i maskinen" },
                    { src: "../billeder/vinylskaerer/gcc/05.placerindenfordehvidefelter.jpeg", caption: "5. Sørg for at vinylen ligger indenfor de hvide felter" },
                    { src: "../billeder/vinylskaerer/gcc/06.placersaaflugtermedbeggelinealer.jpeg", caption: "6. Justér så kanterne flugter begge linealer" },
                    { src: "../billeder/vinylskaerer/gcc/07.laasbegge.jpeg", caption: "7. Lås begge presseruller" },
                    { src: "../billeder/vinylskaerer/gcc/08.laast.jpeg", caption: "8. Presserullerne skal være låst" },
                    { src: "../billeder/vinylskaerer/gcc/09.taendmaskinen.jpeg", caption: "9. Tænd maskinen og skærehovedet begynder at bevæge sig frem og tilbage" },
                    { src: "../billeder/vinylskaerer/gcc/10.saetoffline.jpeg", caption: "10. Tryk 'Offline'" },
                    { src: "../billeder/vinylskaerer/gcc/11.brugpiletiatflyttefolie.jpeg", caption: "11. Brug piletasterne til at flytte folien" },
                    { src: "../billeder/vinylskaerer/gcc/12.trykpaaorigin.jpeg", caption: "12. Tryk på 'Origin' for at sætte startpunkt" },
                    { src: "../billeder/vinylskaerer/gcc/13.saetonline.jpeg", caption: "13. Tryk på 'Online'" },
                    { src: "../billeder/vinylskaerer/gcc/14.maskineskaerer.jpeg", caption: "14. Maskinen skærer nu" },
                    { src: "../billeder/vinylskaerer/gcc/15.saetoffline.jpeg", caption: "15. Når den er færdig – tryk 'Offline'" },
                    { src: "../billeder/vinylskaerer/gcc/16.koerfolieud.jpeg", caption: "16. Brug piletasterne til at køre folien ud" },
                    { src: "../billeder/vinylskaerer/gcc/17.klipligeaf.jpeg", caption: "17. Klip folien fri i et lige snit igennem hele rullen" },
                    { src: "../billeder/vinylskaerer/gcc/18.saettapepaarulle.jpeg", caption: "18. Sæt tape på rullen for at gøre klar til næste og læg den på plads i Materialelageret" }
                ]
            }
        ]
    },
    "wazer": {
        slug: "wazer",
        title: "Wazer Waterjet",
        category: "Vandskærer",
        eyebrow: "Maskinguide",
        icon: "../billeder/ikoner/wazer-waterjet-12x18.png",
        description: "Klargør dit skærejob i WAM-softwaren trin for trin – fra import af fil til eksport af G-code til maskinens SD-kort.",
        shortDescription: "Fra tegning til skærejob i WAM-softwaren.",
        highlights: ["9 trin", "WAM-software", "SD-kort eksport"],
        sections: [
            {
                tag: "Workflow",
                title: "Klargør skærejob i WAM",
                description: "Guiden dækker hele forløbet i WAM-softwaren: import, placering, materialevælger, tapper og eksport af G-code til SD-kortet.",
                meta: "Software",
                slides: [
                    { link: "https://wam.wazer.com/", caption: "1. Åbn WAM-softwaren på wam.wazer.com og log på. Brugernavn: fablabspin · Adgangskode: fablabspin" },
                    { src: "../billeder/wazer/wazer2.png", caption: "2. Tryk på Import File for at åbne filen." },
                    { src: "../billeder/wazer/wazer3.png", caption: "3. Flyt figuren så den er placeret, hvor materialet kommer til at ligge." },
                    { src: "../billeder/wazer/wazer4.png", caption: "4. Figuren kan roteres eller skaleres op og ned her." },
                    { src: "../billeder/wazer/wazer5.png", caption: "5. Vælg materiale og tykkelse i menuerne. Kontrollér at enheden er sat til mm og ikke inches." },
                    { src: "../billeder/wazer/wazer6.png", caption: "6. Vær omhyggelig her. Vælg om der skal skæres på ydersiden, midt i stregen eller på indersiden af stregen." },
                    { src: "../billeder/wazer/wazer7.png", caption: "7. Placer tapper som holder emnet fast under skæringen. Tryk på ? for yderligere forklaring." },
                    { src: "../billeder/wazer/wazer8.png", caption: "8. Vælg skærekvalitet – medium er fint til de fleste formål. Under Cut Details ses sandforbrug (15 kr. pr. påbegyndt kg) og skæretid. Gem som .wzr for at arbejde videre senere, eller tryk Generate Job File og gem G-code på maskinens SD-kort." },
                    { src: "../billeder/wazer/wazer9.png", caption: "9. Tryk på View Simulation for at se en animation af skærejobbet. Den kan gennemgås manuelt eller afspilles automatisk." }
                ]
            }
        ]
    },
    "surecutalot": {
        slug: "surecutalot",
        title: "Sure Cuts A Lot",
        category: "Vinylskærer",
        eyebrow: "Softwareguide",
        icon: "../billeder/ikoner/vinyl-gcc-surecut.png",
        description: "Sure Cuts A Lot workflowet er samlet i én rolig, læsbar sektion fra dokumentopsætning til start af skæring.",
        shortDescription: "Forbered og send skærejob fra Sure Cuts A Lot.",
        highlights: ["12 trin", "Softwareguide", "SVG og cutter-indstillinger"],
        sections: [
            {
                tag: "Workflow",
                title: "Sæt skærejobbet op",
                description: "Brug guiden som en fast tjekliste før du sender jobbet videre til vinylskæreren.",
                meta: "Software",
                slides: [
                    { src: "../billeder/vinylskaerer/surecutsalot/01.startsurecutsalot.jpg", caption: "1. Start Sure Cuts a Lot" },
                    { src: "../billeder/vinylskaerer/surecutsalot/02.stoerrelse.jpg", caption: "2. Vælg dokumentstørrelse" },
                    { src: "../billeder/vinylskaerer/surecutsalot/03.skaermbillede.jpg", caption: "3. Startskærm vises" },
                    { src: "../billeder/vinylskaerer/surecutsalot/04.importsvg.jpg", caption: "4. Importér SVG-fil" },
                    { src: "../billeder/vinylskaerer/surecutsalot/05.vaelgfarvepalette.jpg", caption: "5. Vælg farvepalette" },
                    { src: "../billeder/vinylskaerer/surecutsalot/06.saetlinecolour.jpg", caption: "6. Sæt stregfarve" },
                    { src: "../billeder/vinylskaerer/surecutsalot/07.saetlinjebredde.jpg", caption: "7. Justér linjebredde" },
                    { src: "../billeder/vinylskaerer/surecutsalot/08.placertegning.jpg", caption: "8. Placer tegningen korrekt" },
                    { src: "../billeder/vinylskaerer/surecutsalot/09.trykpaacutter.jpg", caption: "9. Tryk på cutter-ikonet" },
                    { src: "../billeder/vinylskaerer/surecutsalot/10.placeringsindstillinger.jpg", caption: "10. Vælg om billedet skal skæres som What You See Is What You Get, eller om den skal placeres efter det fastsatte origin på maskinen" },
                    { src: "../billeder/vinylskaerer/surecutsalot/11.vaelgvinyltype.jpg", caption: "11. Vælg type vinyl og skærestil" },
                    { src: "../billeder/vinylskaerer/surecutsalot/12.trykcut.jpg", caption: "12. Tryk 'Cut' for at starte skæring" }
                ]
            }
        ]
    }
};