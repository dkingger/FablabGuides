window.betaGuideData = {
    "prusaslicer": {
        slug: "prusaslicer",
        title: "PrusaSlicer",
        category: "3D Printing",
        eyebrow: "Software Guide",
        icon: "../../billeder/ikoner/prusa-slicer.png",
        description: "Prepare your 3D prints in PrusaSlicer with a clear workflow from STL file to exported G-code.",
        shortDescription: "From STL to export ready in a few steps.",
        highlights: ["10 steps", "Slicing workflow", "Export to SD card"],
        sections: [
            {
                tag: "Workflow",
                title: "Prepare the print file",
                description: "This guide covers the entire PrusaSlicer workflow, making it clear which settings to configure before starting a print.",
                meta: "Software",
                slides: [
                    { src: "../../billeder/prusa-mk3s/prusaslicer/open_prusaslicer.avif", caption: "1. Open PrusaSlicer" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/choose_stl_file.avif", caption: "2. Select your STL file" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/choose_printer.avif", caption: "3. Select printer profile (e.g. MK3S)" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/choose_fillament_slicer.avif", caption: "4. Select the correct filament profile" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/choose_layer_height.avif", caption: "5. Select layer height" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/Slice_3D_print.avif", caption: "6. Slice and preview" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/choose_support.avif", caption: "7. Add support if needed" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/check_weight_print.avif", caption: "8. Check print time and weight" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/Export_g_code.avif", caption: "9. Export G-code to SD card" },
                    { src: "../../billeder/prusa-mk3s/prusaslicer/eject_drive.avif", caption: "10. Safely remove the SD card" }
                ]
            }
        ]
    },
    "prusamini": {
        slug: "prusamini",
        title: "Prusa Mini",
        category: "3D Printing",
        eyebrow: "Printer Guide",
        icon: "../../billeder/ikoner/prusa-mini-fritlagt.png",
        description: "A compact 3D printer with two classic workflows: change filament and safely start a new print.",
        shortDescription: "Change filament and start a print on Prusa Mini.",
        highlights: ["2 workflows", "Beginner-friendly", "Step by step"],
        sections: [
            {
                tag: "Filament",
                title: "Change filament",
                description: "Use this section when you need to load new filament in the printer.",
                meta: "6 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/01_taendprinter.jpeg", caption: "1. Turn on the printer" },
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/02_vaelgfillament.jpeg", caption: "2. Select 'Filament' in the menu" },
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/03_loadfillament.jpeg", caption: "3. Select 'Load Filament'" },
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/04_indsaetfillament.jpeg", caption: "4. Insert filament into the extruder" },
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/05_kontrolleratderkommerfillament.jpeg", caption: "5. Check that filament comes out" },
                    { src: "../../billeder/3dprinter/prusamini/skift_fillament/06_korrektfillament.jpeg", caption: "6. Ready to print" }
                ]
            },
            {
                tag: "Print start",
                title: "Start a print",
                description: "A short workflow for preparation, file selection and monitoring the first layer.",
                meta: "4 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusamini/start_print/00_renspladen.jpeg", caption: "1. Clean the build plate" },
                    { src: "../../billeder/3dprinter/prusamini/start_print/01_indsaetusbogprint.jpeg", caption: "2. Insert USB stick with G-code" },
                    { src: "../../billeder/3dprinter/prusamini/start_print/02_vaelgfil.jpeg", caption: "3. Select the file on the screen" },
                    { src: "../../billeder/3dprinter/prusamini/start_print/03_trykprint.jpeg", caption: "4. Press 'Print' and monitor the first layer" }
                ]
            }
        ]
    },
    "prusa-mk3s": {
        slug: "prusa-mk3s",
        title: "Prusa MK3S",
        category: "3D Printing",
        eyebrow: "Printer Guide",
        icon: "../../billeder/ikoner/prusa-mk3s-fritlagt.png",
        description: "The Prusa MK3S is a reliable all-round printer. This beta guide presents the most important workflows in a calmer layout.",
        shortDescription: "Change filament and start a print on MK3S.",
        highlights: ["2 workflows", "Reliable printer", "First layer focus"],
        sections: [
            {
                tag: "Filament",
                title: "Change filament",
                description: "The complete unload and load procedure in one clear workflow.",
                meta: "9 steps",
                slides: [
                    { src: "../../billeder/prusa-mk3s/skift filament/main_screen.avif", caption: "1. Home screen: select 'Unload Filament'" },
                    { src: "../../billeder/prusa-mk3s/skift filament/unload_filament.avif", caption: "2. Select 'Unload Filament' in the menu" },
                    { src: "../../billeder/prusa-mk3s/skift filament/filament_choose.avif", caption: "3. Select filament type, e.g. PLA" },
                    { src: "../../billeder/prusa-mk3s/skift filament/preheat_to_unload.avif", caption: "4. Printer heats up to correct temperature" },
                    { src: "../../billeder/prusa-mk3s/skift filament/press_knob_unload.avif", caption: "5. Press the button to confirm" },
                    { src: "../../billeder/prusa-mk3s/skift filament/hotend.avif", caption: "6. Carefully pull out the filament when heated" },
                    { src: "../../billeder/prusa-mk3s/skift filament/extrude.avif", caption: "7. Insert new filament and press 'Load Filament'" },
                    { src: "../../billeder/prusa-mk3s/skift filament/correct_extrude.avif", caption: "8. Check that filament extrudes correctly" },
                    { src: "../../billeder/prusa-mk3s/skift filament/printer_ok.avif", caption: "9. Confirm and complete the procedure" }
                ]
            },
            {
                tag: "Print start",
                title: "Start a print",
                description: "Preparation, file selection and first layer in one short, safe workflow.",
                meta: "6 steps",
                slides: [
                    { src: "../../billeder/prusa-mk3s/start_print/kontrol_start_printer.avif", caption: "1. Check the printer is turned on and ready" },
                    { src: "../../billeder/prusa-mk3s/start_print/wipe_surface.avif", caption: "2. Clean the build plate with isopropyl alcohol" },
                    { src: "../../billeder/prusa-mk3s/start_print/insert_SD_kort.avif", caption: "3. Insert SD card with your .gcode file" },
                    { src: "../../billeder/prusa-mk3s/start_print/choose_file.avif", caption: "4. Select the file you want to print" },
                    { src: "../../billeder/prusa-mk3s/start_print/printer_varmer_start.avif", caption: "5. Printer heats up and starts printing" },
                    { src: "../../billeder/prusa-mk3s/start_print/kontrol_first_lag.avif", caption: "6. Monitor the first layer and adjust Z-offset if needed" }
                ]
            }
        ]
    },
    "prusa-mk4": {
        slug: "prusa-mk4",
        title: "Prusa MK4",
        category: "3D Printing",
        eyebrow: "Printer Guide",
        icon: "../../billeder/ikoner/prusa-mk4-fritlagt.png",
        description: "The MK4 guide covers filament loading and print start in the same visual system as the rest of the beta.",
        shortDescription: "Change filament and start a print on MK4.",
        highlights: ["2 workflows", "Automated printer", "USB and display"],
        sections: [
            {
                tag: "Filament",
                title: "Change filament",
                description: "Follow the screen step by step from the filament menu to correctly loaded material.",
                meta: "6 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/01_vaelgfillament.jpeg", caption: "1. Select 'Filament' in the menu" },
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/02_loadfillament.jpeg", caption: "2. Select 'Load Filament'" },
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/03_vaelgtype.jpeg", caption: "3. Select filament type, e.g. PLA" },
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/04_indsaetfillament.jpeg", caption: "4. Insert filament into the extruder" },
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/05_trykfortsaet.jpeg", caption: "5. Press 'Continue' when filament is inserted" },
                    { src: "../../billeder/3dprinter/prusamk4/skift_fillament/06_kontrollerfarveskift.jpeg", caption: "6. Check that the filament is correctly inserted and colour has changed" }
                ]
            },
            {
                tag: "Print start",
                title: "Start a print",
                description: "An extended print workflow with file selection, confirmation and first layer check.",
                meta: "9 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusamk4/start_print/00_rensprintplade.jpeg", caption: "1. Clean the build plate" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/01_indsaetusbogstart.jpeg", caption: "2. Insert USB with G-code. The newest file loads automatically." },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/02_vedforkertfil.jpeg", caption: "3. If it's the right file go to step 6. If not press 'Back'" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/03_trykprint.jpeg", caption: "4. Press 'Print'" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/04_vaelgfil.jpeg", caption: "5. Select the desired file" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/05_trykprint.jpeg", caption: "6. Press 'Print' again to confirm" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/06_ledprintstart.jpeg", caption: "7. LED lights up at print start" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/07_kontrollerfoerstelag.jpeg", caption: "8. Monitor the first layer and adjust if needed" },
                    { src: "../../billeder/3dprinter/prusamk4/start_print/08_displayskifttid.jpeg", caption: "9. Display shows estimated time and status" }
                ]
            }
        ]
    },
    "prusa-xl": {
        slug: "prusa-xl",
        title: "Prusa XL",
        category: "3D Printing",
        eyebrow: "Printer Guide",
        icon: "../../billeder/ikoner/prusa-xl-fritlagt.png",
        description: "The Prusa XL has multiple tools and more options. This beta guide makes filament and print start workflows more manageable.",
        shortDescription: "Multi-tool workflow on Prusa XL.",
        highlights: ["2 workflows", "Multi-tool", "USB and tool selection"],
        sections: [
            {
                tag: "Filament",
                title: "Change filament",
                description: "The guide shows both the physical spool placement and the subsequent load procedure on the display.",
                meta: "12 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6315.jpeg", caption: "1. Up to 3 filament spools on the left side and 2 on the right. The load procedure is the same for all 5." },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6316.jpeg", caption: "2. The spool holders can be pulled out if you need space for wider spools." },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6318.jpeg", caption: "3. Filament is fed through holes labeled 1 to 5. No. 1 is the leftmost hotend, 5 is the rightmost." },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6320ny.jpg", caption: "4. Push filament all the way down until it reaches the sensor in the hotend. In this image it has not gone far enough." },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6322.jpeg", caption: "5. Select filament on the display" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6323.jpeg", caption: "6. Select 'Load filament'" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6324.jpeg", caption: "7. Select which hotend (Tool) to load filament into" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6325.jpeg", caption: "8. Select filament type" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6326.jpeg", caption: "9. The selected hotend is retrieved from parking" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6328.jpeg", caption: "10. Push filament forward to activate the sensor and press 'Continue'" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6329.jpeg", caption: "11. After loading, check that the old filament has been replaced by the new one" },
                    { src: "../../billeder/3dprinter/prusaxl/skift_fillament/IMG_6331.jpeg", caption: "12. Check there are no remnants of old filament or debris on the hotend" }
                ]
            },
            {
                tag: "Print start",
                title: "Start a print",
                description: "From USB stick to hotend selection and first layer check.",
                meta: "9 steps",
                slides: [
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6332.jpeg", caption: "1. Insert the USB stick" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6335.jpeg", caption: "2. The newest file on the USB stick loads automatically" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6336.jpeg", caption: "3. Select which filament matches each colour in the slicer file. If only one colour, skip to step 5." },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6337.jpeg", caption: "4. If the colour is wrong or a filament position is empty, correct this before continuing." },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6339.jpeg", caption: "5. To load the file from USB press 'Print'" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6340.jpeg", caption: "6. Select the file you want to print" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6341.jpeg", caption: "7. Press 'Continue' if it is the correct file" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6342.jpeg", caption: "8. Select which hotend to print with" },
                    { src: "../../billeder/3dprinter/prusaxl/start_print/IMG_6345.jpeg", caption: "9. Check that the first layer is adhering correctly" }
                ]
            }
        ]
    },
    "laser-lightburn": {
        slug: "laser-lightburn",
        title: "LightBurn",
        category: "Laser Cutter",
        eyebrow: "Software Guide",
        icon: "../../billeder/ikoner/laser-lightburn.png",
        description: "A complete LightBurn workflow from importing a drawing to framing and starting the laser.",
        shortDescription: "Safely go from drawing to cutting in LightBurn.",
        highlights: ["13 steps", "Software workflow", "Click to zoom"],
        sections: [
            {
                tag: "Workflow",
                title: "The LightBurn workflow",
                description: "The complete LightBurn workflow, helping new users understand the correct setup sequence.",
                meta: "Software",
                slides: [
                    { src: "../../billeder/laser/lightburn/01tom_skaerm.jpeg", caption: "1. Open LightBurn or select 'New' in the File tab" },
                    { src: "../../billeder/laser/lightburn/02reset_to_default.jpeg", caption: "2. Reset to default settings if features are missing" },
                    { src: "../../billeder/laser/lightburn/03importer_tegning.jpeg", caption: "3. Import your drawing" },
                    { src: "../../billeder/laser/lightburn/04farver.jpeg", caption: "4. Check all layers/colours you need are included" },
                    { src: "../../billeder/laser/lightburn/05vaelg_farve.jpeg", caption: "5. Select e.g. the cutting layer" },
                    { src: "../../billeder/laser/lightburn/06skaering.jpeg", caption: "6. Select material and function in the material library and click Assign" },
                    { src: "../../billeder/laser/lightburn/07fyld_gravering.jpeg", caption: "7. Fill engraving = solid shape" },
                    { src: "../../billeder/laser/lightburn/08linje_gravering.jpeg", caption: "8. Line engraving = outline only" },
                    { src: "../../billeder/laser/lightburn/09skift_til_laser.jpeg", caption: "9. Switch to laser view" },
                    { src: "../../billeder/laser/lightburn/10marker_hele_figuren.jpeg", caption: "10. Select everything to be cut/engraved" },
                    { src: "../../billeder/laser/lightburn/11saet_origin_ightburn.jpeg", caption: "11. Set origin in LightBurn" },
                    { src: "../../billeder/laser/lightburn/12saet_origin_paa_laser.jpeg", caption: "12. Set the same origin physically on the machine" },
                    { src: "../../billeder/laser/lightburn/13frame_og_start_laser.jpeg", caption: "13. Use Frame and start the laser" }
                ]
            }
        ]
    },
    "laser-eduard": {
        slug: "laser-eduard",
        title: "Eduard",
        category: "Laser Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/laser-eduard-fritlagt.png",
        description: "Setting material thickness on Eduard explained in a short visual workflow.",
        shortDescription: "Set correct Z-height on Eduard.",
        highlights: ["5 steps", "Height calibration", "Click to zoom"],
        sections: [
            {
                tag: "Focus",
                title: "Set material thickness on Eduard",
                description: "Use the focus block and Z/U function to set correct work height before cutting.",
                meta: "Machine",
                slides: [
                    { src: "../../billeder/laser/hoejde_eduard/00materiale_i_maskine.jpeg", caption: "1. Place the material in the machine" },
                    { src: "../../billeder/laser/hoejde_eduard/01fokusbrik.jpeg", caption: "2. Place the focus block on the material" },
                    { src: "../../billeder/laser/hoejde_eduard/02tryk_zu.jpeg", caption: "3. Press Z/U to adjust the Z-axis" },
                    { src: "../../billeder/laser/hoejde_eduard/03saet_z_hoejde.jpeg", caption: "4. Use arrow keys to adjust height up or down" },
                    { src: "../../billeder/laser/hoejde_eduard/04korrekt_hoejde.jpeg", caption: "5. When the block just fits the grooved edge of the laser head, the height is correct" }
                ]
            }
        ]
    },
    "laser-aeon": {
        slug: "laser-aeon",
        title: "AEON",
        category: "Laser Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/laser-aeon-fritlagt.png",
        description: "A short AEON guide to correct focus and the auto-focus function, in the same beta design as the rest of the guides.",
        shortDescription: "Set correct focus on the AEON laser.",
        highlights: ["5 steps", "Auto Focus", "Click to zoom"],
        sections: [
            {
                tag: "Focus",
                title: "Set material thickness on AEON",
                description: "Learn the difference between incorrect and correct height, then finish with auto focus.",
                meta: "Machine",
                slides: [
                    { src: "../../billeder/laser/hoejde_aeon/00forkert.jpg", caption: "1. Incorrect height – the focus pen is not within the material" },
                    { src: "../../billeder/laser/hoejde_aeon/00rigtig.jpg", caption: "2. Correct height – the focus pen is within the material" },
                    { src: "../../billeder/laser/hoejde_aeon/01saethoej.jpg", caption: "3. Press the Z/U key to enter the menu" },
                    { src: "../../billeder/laser/hoejde_aeon/02saethoej.jpg", caption: "4. Use the arrow key to select Auto Focus" },
                    { src: "../../billeder/laser/hoejde_aeon/03saethoej.jpg", caption: "5. Press Enter to focus the laser" }
                ]
            }
        ]
    },
    "laser-epilog": {
        slug: "laser-epilog",
        title: "Epilog",
        category: "Laser Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/laser-epilog-fritlagt.png",
        description: "The Epilog guide is not yet available, but the beta reserves the space in the same design style as the rest of the site.",
        shortDescription: "Placeholder for upcoming Epilog guide.",
        highlights: ["Coming soon", "Same design framework", "Ready for content"],
        sections: []
    },
    "brother-scanncut": {
        slug: "brother-scanncut",
        title: "Brother Scan'n'Cut",
        category: "Vinyl Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/vinyl-brother-scanncut.png",
        description: "The original Brother Scan'n'Cut page is currently empty. The beta prepares a styled placeholder in the same design style.",
        shortDescription: "Placeholder for upcoming Brother guide.",
        highlights: ["Coming soon", "Original page empty", "Ready for next iteration"],
        sections: []
    },
    "canvasworkspace": {
        slug: "canvasworkspace",
        title: "CanvasWorkspace",
        category: "Vinyl Cutter",
        eyebrow: "Software Guide",
        icon: "../../billeder/ikoner/vinyl-brother-canvasworkspace.png",
        description: "CanvasWorkspace is split into two workflows: importing an SVG and tracing an image. The beta layout makes the difference between them clearer.",
        shortDescription: "Import SVG or trace an image in CanvasWorkspace.",
        highlights: ["2 workflows", "Software guide", "Download to USB"],
        sections: [
            {
                tag: "Import",
                title: "Import SVG",
                description: "A step-by-step workflow from new document to file ready on USB stick.",
                meta: "9 steps",
                slides: [
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/01.canvasworkspace.jpeg", caption: "1. Open Canvas Workspace" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/02.nytdokument.jpeg", caption: "2. Create a new document" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/03.grundskærm.jpeg", caption: "3. Start screen is displayed" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/04.navngivdokument.jpeg", caption: "4. Name the document" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/05.importersvg.jpeg", caption: "5. Click 'Import SVG'" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/06.aabensvg.jpeg", caption: "6. Select SVG file" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/07.placerbillede.jpeg", caption: "7. Place the image on the canvas" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/08.downloadknap.jpeg", caption: "8. Click the download button" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/importersvg/09.gempåcomputer.jpeg", caption: "9. Save the file to USB stick" }
                ]
            },
            {
                tag: "Trace",
                title: "Trace image",
                description: "Use the 'Trace image' function to convert a bitmap into a cutting path.",
                meta: "11 steps",
                slides: [
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/01.canvasworkspace.jpeg", caption: "1. Open Canvas Workspace" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/02.nytdokument.jpeg", caption: "2. Create a new document" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/03.grundskærm.jpeg", caption: "3. Start screen is displayed" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/04.navngivdokument.jpeg", caption: "4. Name the document" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/05.sporbillede.jpeg", caption: "5. Select 'Trace image'" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/06.aabenbillede.jpeg", caption: "6. Open image file" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/07.vaelgcolor.jpeg", caption: "7. Select colour mode for tracing" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/08.preview.jpeg", caption: "8. Preview the trace" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/09.skygge.jpeg", caption: "9. Always select no here" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/10.download.jpeg", caption: "10. Download the project" },
                    { src: "../../billeder/vinylskaerer/canvas_workspace/sporbillede/11.vaelgcomputer.jpeg", caption: "11. Save to USB stick" }
                ]
            }
        ]
    },
    "gcc-expert24": {
        slug: "gcc-expert24",
        title: "GCC Expert 24 II",
        category: "Vinyl Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/vinyl-gcc-expert24.png",
        description: "A complete machine workflow from switched-off machine to finished vinyl roll removed.",
        shortDescription: "Set up and cut vinyl on GCC Expert 24 II.",
        highlights: ["18 steps", "Machine workflow", "Origin and online/offline"],
        sections: [
            {
                tag: "Workflow",
                title: "Set up and cut on GCC Expert 24 II",
                description: "This guide covers the complete workflow so users follow the same sequence every time.",
                meta: "Machine",
                slides: [
                    { src: "../../billeder/vinylskaerer/gcc/01.slukmaskinen.jpeg", caption: "1. Turn off the machine" },
                    { src: "../../billeder/vinylskaerer/gcc/02.placerrullestativbag.jpeg", caption: "2. Place roll holder behind the machine" },
                    { src: "../../billeder/vinylskaerer/gcc/03.laegvinyliholder.jpeg", caption: "3. Place vinyl in roll holder" },
                    { src: "../../billeder/vinylskaerer/gcc/04.skubvinylind.jpeg", caption: "4. Feed vinyl into the machine" },
                    { src: "../../billeder/vinylskaerer/gcc/05.placerindenfordehvidefelter.jpeg", caption: "5. Ensure vinyl is within the white markers" },
                    { src: "../../billeder/vinylskaerer/gcc/06.placersaaflugtermedbeggelinealer.jpeg", caption: "6. Align edges flush with both rulers" },
                    { src: "../../billeder/vinylskaerer/gcc/07.laasbegge.jpeg", caption: "7. Lock both pressure rollers" },
                    { src: "../../billeder/vinylskaerer/gcc/08.laast.jpeg", caption: "8. Pressure rollers must be locked" },
                    { src: "../../billeder/vinylskaerer/gcc/09.taendmaskinen.jpeg", caption: "9. Turn on the machine – the cutting head will move back and forth" },
                    { src: "../../billeder/vinylskaerer/gcc/10.saetoffline.jpeg", caption: "10. Press 'Offline'" },
                    { src: "../../billeder/vinylskaerer/gcc/11.brugpiletiatflyttefolie.jpeg", caption: "11. Use arrow keys to move the vinyl" },
                    { src: "../../billeder/vinylskaerer/gcc/12.trykpaaorigin.jpeg", caption: "12. Press 'Origin' to set the start point" },
                    { src: "../../billeder/vinylskaerer/gcc/13.saetonline.jpeg", caption: "13. Press 'Online'" },
                    { src: "../../billeder/vinylskaerer/gcc/14.maskineskaerer.jpeg", caption: "14. Machine is now cutting" },
                    { src: "../../billeder/vinylskaerer/gcc/15.saetoffline.jpeg", caption: "15. When finished – press 'Offline'" },
                    { src: "../../billeder/vinylskaerer/gcc/16.koerfolieud.jpeg", caption: "16. Use arrow keys to feed vinyl out" },
                    { src: "../../billeder/vinylskaerer/gcc/17.klipligeaf.jpeg", caption: "17. Cut vinyl free with a straight cut through the full roll" },
                    { src: "../../billeder/vinylskaerer/gcc/18.saettapepaarulle.jpeg", caption: "18. Apply tape to the roll to prepare for next user and store in the Materials Area" }
                ]
            }
        ]
    },
    "wazer": {
        slug: "wazer",
        title: "Wazer Waterjet",
        category: "Waterjet Cutter",
        eyebrow: "Machine Guide",
        icon: "../../billeder/ikoner/wazer-waterjet-12x18.png",
        description: "Prepare your cut job in WAM software step by step – from file import to G-code export to the machine's SD card.",
        shortDescription: "From drawing to cut job in WAM software.",
        highlights: ["9 steps", "WAM software", "SD card export"],
        sections: [
            {
                tag: "Workflow",
                title: "Prepare cut job in WAM",
                description: "This guide covers the complete WAM software workflow: import, placement, material selection, tabs, and G-code export to SD card.",
                meta: "Software",
                slides: [
                    { src: "../../billeder/wazer/wazer1.png", caption: "1. Click the WAM button at the top right of the Wazer website. Login: fablabspin / fablabspin" },
                    { src: "../../billeder/wazer/wazer2.png", caption: "2. Click Import File to open your file." },
                    { src: "../../billeder/wazer/wazer3.png", caption: "3. Move the shape to where the material will be placed." },
                    { src: "../../billeder/wazer/wazer4.png", caption: "4. The shape can be rotated or scaled here." },
                    { src: "../../billeder/wazer/wazer5.png", caption: "5. Select material and thickness from the menus. Check that the unit is set to mm and not inches." },
                    { src: "../../billeder/wazer/wazer6.png", caption: "6. Be careful here. Select whether to cut on the outside, along the centre line, or on the inside of the line." },
                    { src: "../../billeder/wazer/wazer7.png", caption: "7. Place tabs to hold the workpiece in place during cutting. Click ? for further explanation." },
                    { src: "../../billeder/wazer/wazer8.png", caption: "8. Select cut quality – medium works well for most purposes. Under Cut Details you can see sand usage (15 DKK per started kg) and cut time. Save as .wzr to continue later, or press Generate Job File and save G-code to the machine's SD card." },
                    { src: "../../billeder/wazer/wazer9.png", caption: "9. Press View Simulation to see an animation of the cut job. You can step through manually or play automatically." }
                ]
            }
        ]
    },
    "surecutalot": {
        slug: "surecutalot",
        title: "Sure Cuts A Lot",
        category: "Vinyl Cutter",
        eyebrow: "Software Guide",
        icon: "../../billeder/ikoner/vinyl-gcc-surecut.png",
        description: "The Sure Cuts A Lot workflow in one clear section from document setup to starting the cut.",
        shortDescription: "Prepare and send a cut job from Sure Cuts A Lot.",
        highlights: ["12 steps", "Software guide", "SVG and cutter settings"],
        sections: [
            {
                tag: "Workflow",
                title: "Set up the cut job",
                description: "Use this guide as a checklist before sending the job to the vinyl cutter.",
                meta: "Software",
                slides: [
                    { src: "../../billeder/vinylskaerer/surecutsalot/01.startsurecutsalot.jpg", caption: "1. Launch Sure Cuts A Lot" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/02.stoerrelse.jpg", caption: "2. Select document size" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/03.skaermbillede.jpg", caption: "3. Start screen is displayed" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/04.importsvg.jpg", caption: "4. Import SVG file" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/05.vaelgfarvepalette.jpg", caption: "5. Select colour palette" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/06.saetlinecolour.jpg", caption: "6. Set line colour" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/07.saetlinjebredde.jpg", caption: "7. Adjust line width" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/08.placertegning.jpg", caption: "8. Position the drawing correctly" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/09.trykpaacutter.jpg", caption: "9. Click the cutter icon" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/10.placeringsindstillinger.jpg", caption: "10. Choose whether to cut What You See Is What You Get, or position based on the machine's set origin" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/11.vaelgvinyltype.jpg", caption: "11. Select vinyl type and cut style" },
                    { src: "../../billeder/vinylskaerer/surecutsalot/12.trykcut.jpg", caption: "12. Press 'Cut' to start cutting" }
                ]
            }
        ]
    }
};
