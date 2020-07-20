var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Create pages
let workInProgressPage = figma.createPage();
let scratchPage = figma.createPage();
// Set page names and renames the default "Page 1"
figma.currentPage.name = "✅ Ready For Development";
workInProgressPage.name = "🚧 Work In Progress";
scratchPage.name = "❌ Scratch";
// Frame for wrapping the list of page examples.
let listFrame = figma.createFrame();
listFrame.name = "Other page examples";
listFrame.layoutMode = "VERTICAL";
listFrame.counterAxisSizingMode = "AUTO";
listFrame.verticalPadding = 16;
listFrame.horizontalPadding = 16;
listFrame.itemSpacing = 16;
listFrame.cornerRadius = 8;
scratchPage.appendChild(listFrame);
let run = () => __awaiter(this, void 0, void 0, function* () {
    // Need to load a font here to generate the other page examples.
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
    // Not all projects need a prototype, shipped it/released, or research page.
    // However in order to make adding one of these pages easily, we add some
    // text to our scratch page so we can copy/paste them with the proper emoji.
    yield createAdditionalPageExample("🚢 Shipped");
    yield createAdditionalPageExample("🕹 Prototype");
    yield createAdditionalPageExample("⚙️ Components");
    yield createAdditionalPageExample("👀 Ready for Review");
    figma.notify("Project Scafolding Done 👍");
    figma.closePlugin();
});
// This function adds an example of how to name your less common pages + their emoji
// to your scratch page.
let createAdditionalPageExample = (text) => {
    let linkLabel = figma.createText();
    linkLabel.fontName = { family: "Inter", style: "Regular" };
    linkLabel.characters = text;
    linkLabel.fontSize = 16;
    listFrame.appendChild(linkLabel);
};
run();
