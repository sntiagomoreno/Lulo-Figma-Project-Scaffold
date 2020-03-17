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
let FinalUI = figma.createPage();
let WorkInProgress = figma.createPage();
let Scratch = figma.createPage();
// Set page names
figma.currentPage.name = "⬜️ Cover";
FinalUI.name = "✅ Ready For Development";
WorkInProgress.name = "🚧 Work In Progress";
Scratch.name = "❌ Scratch";
// Create elements within the cover frame.
let Cover = figma.currentPage;
let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesc = figma.createText();
// For when external links support is added.
// let CoverLink = figma.createText();
CoverFrame.name = "Cover";
Cover.appendChild(CoverFrame);
CoverFrame.appendChild(CoverHead);
CoverFrame.appendChild(CoverDesc);
CoverFrame.resize(740, 300);
// Cover title/header styles.
let createHeader = (name) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
    CoverHead.fontName = { family: "Inter", style: "Bold" };
    CoverHead.characters = name;
    CoverHead.fontSize = 36;
    CoverHead.textAlignHorizontal = "CENTER";
});
let createDescription = (text) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
    CoverDesc.fontSize = 16;
    CoverDesc.characters = text;
    CoverDesc.textAlignHorizontal = "CENTER";
    layoutText();
});
// let createSpecLink = async (text) => {
//   await figma.loadFontAsync({ family: "Inter", style: "Regular" });
//   CoverLink.fontSize = 14;
//   CoverLink.characters = text;
//   CoverLink.textAlignHorizontal = "CENTER";
//   layoutText();
// }
// Utility functions for layout
const setPosition = (node, spacex, spacey) => {
    node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]];
};
const xCalculator = (container, element) => {
    return ((container.width / 2) - (element.width / 2));
};
const yCalculator = (container, element) => {
    return ((container.height / 2) - (element.height / 2));
};
let layoutText = () => {
    let descX = xCalculator(CoverFrame, CoverDesc);
    let headX = xCalculator(CoverFrame, CoverHead);
    let headY = (yCalculator(CoverFrame, CoverHead) - 30);
    let descY = headY + CoverHead.height + 16;
    let linkY = headY + CoverDesc.height + 8;
    setPosition(CoverHead, headX, headY);
    setPosition(CoverDesc, descX, descY);
    // setPosition(CoverLink, descX, linkyY);
};
let run = () => __awaiter(this, void 0, void 0, function* () {
    yield createHeader("Project Name");
    yield createDescription("Write a quick project Description");
    // For when external link support feature is released.
    // await createSpecLink("Product Spec →");
    figma.notify("Project Scafolding Done 👍");
    figma.closePlugin();
});
run();
