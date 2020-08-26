var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Colors
const Colors = {
    white: [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 1, g: 1, b: 1 }
        }],
    lime: [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 0.9019607901573181, g: 1, b: 0 }
        }],
    prussian: [{
            type: "SOLID",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            color: { r: 0.5098039507865906, g: 0.5921568870544434, b: 0.7176470756530762 },
        }],
    surface: [{
            type: "GRADIENT_RADIAL",
            visible: true,
            opacity: 1,
            blendMode: "NORMAL",
            gradientStops: [
                {
                    color: { r: 0.14210528135299683, g: 0.1736842393875122, b: 0.25789472460746765, a: 1 },
                    position: 0
                },
                {
                    color: { r: 0.10588235408067703, g: 0.12941177189350128, b: 0.1921568661928177, a: 1 },
                    position: 1
                }
            ],
            gradientTransform: [
                [-4.798151209683965e-9, 0.621745765209198, 0.5],
                [-0.37419557571411133, -1.3576851642937982e-8, 0.6865988969802856]
            ]
        }]
};
// Clone function
let clone = val => {
    return JSON.parse(JSON.stringify(val));
};
if (figma.command == "scaffold") {
    // Create pages
    let scratchPage = figma.createPage();
    let discoveryPage = figma.createPage();
    let wipPage = figma.createPage();
    let readyPage = figma.createPage();
    let prototypePage = figma.createPage();
    let shippedPage = figma.createPage();
    // Set page names and renames the default "Page 1"
    figma.currentPage.name = "🌁Cover";
    scratchPage.name = "❌Scratch";
    discoveryPage.name = "🧠Definition";
    wipPage.name = "🚧WIP";
    readyPage.name = "✅Ready";
    prototypePage.name = "🕹Prototype";
    shippedPage.name = "🚢Shipped";
    // Frame for wrapping the list of page examples.
    let coverFrame = figma.createFrame();
    let fills = clone(coverFrame.fills);
    fills = Colors.surface;
    coverFrame.resize(1000, 600);
    coverFrame.name = "Cover";
    coverFrame.fills = fills;
    figma.currentPage.appendChild(coverFrame);
    figma.currentPage.selection = [coverFrame];
    figma.viewport.scrollAndZoomIntoView([coverFrame]);
    let run = () => __awaiter(this, void 0, void 0, function* () {
        // Need to load a font here to generate the other page examples.
        yield figma.loadFontAsync({ family: "Gilroy", style: "Medium" });
        yield figma.loadFontAsync({ family: "Gilroy", style: "Bold" });
        // Not all projects need a prototype, shipped it/released, or research page.
        // However in order to make adding one of these pages easily, we add some
        // text to our scratch page so we can copy/paste them with the proper emoji.
        yield createCoverImage();
        figma.notify("Ready to Lulo 👏");
        figma.closePlugin();
    });
    // This function adds an example of how to name your less common pages + their emoji
    // to your scratch page.
    let createCoverImage = () => {
        // Title
        createLabel("Title", 56, [80, 166], Colors.lime, false, false, "Bold");
        // Description
        createLabel("Two-liner that describes the file", 16, [80, 250], Colors.white);
        // Owner Title
        createLabel("Owner", 14, [80, 427], Colors.prussian, true, true);
        // Owner Text
        createLabel("@slackID", 20, [80, 451], Colors.white);
        // Status Title
        createLabel("Status", 14, [270, 427], Colors.prussian, true, true);
        // Status Text
        createLabel("Discovery", 20, [270, 451], Colors.white);
    };
    let createLabel = (text, size, position, color, uppercase, space, style = "Medium") => {
        let label = figma.createText();
        label.fontName = { family: "Gilroy", style };
        label.characters = text;
        label.fontSize = size;
        label.x = position[0];
        label.y = position[1];
        let fill = clone(label.fills);
        fill = color;
        label.fills = fill;
        if (space)
            label.letterSpacing = { unit: "PIXELS", value: 1.69 };
        if (uppercase)
            label.textCase = "UPPER";
        coverFrame.appendChild(label);
    };
    run();
}
if (figma.command == "delete") {
    figma.root.children.forEach(item => {
        if (figma.currentPage !== item) {
            item.remove();
        }
        else {
            item.children.forEach(item => {
                item.remove();
            });
        }
    });
    figma.currentPage.name = "Page 1";
    figma.notify("File Cleaned 🧻");
    figma.closePlugin();
}
// type: "SOLID"
// visible: true
// opacity: 1
// blendMode: "NORMAL"
// color:
// r: 0.9019607901573181
// g: 1
// b: 0
// "S:d0182dae315c2bffdef8eee772fce3451d5ebd46,268:12"
