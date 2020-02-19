var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let FinalUI = figma.createPage();
let WorkInProgress = figma.createPage();
let Scratch = figma.createPage();
let Cover = figma.currentPage;
let CoverFrame = figma.createFrame();
let CoverHead = figma.createText();
let CoverDesc = figma.createText();
figma.currentPage.name = "⬜️ Cover";
FinalUI.name = "✅ Ready For Development";
WorkInProgress.name = "🚧 Work In Progress";
Scratch.name = "❌ Scratch";
CoverFrame.name = "Cover";
Cover.appendChild(CoverFrame);
CoverFrame.appendChild(CoverHead);
CoverFrame.appendChild(CoverDesc);
CoverFrame.resize(620, 320);
let setPosition = (node, spacex, spacey) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]]; };
let xCalculator = (container, element) => { return ((container.width / 2) - (element.width / 2)); };
let yCalculator = (container, element) => { return ((container.height / 2) - (element.height / 2)); };
let loadFontHead = (name) => __awaiter(this, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Whitney", style: "Bold" });
    CoverHead.fontName = { family: "Whitney", style: "Bold" };
    CoverHead.characters = name;
    CoverHead.fontSize = 36;
    CoverHead.textAlignHorizontal = "CENTER";
});
let layoutText = () => {
    let descX = xCalculator(CoverFrame, CoverDesc);
    let headX = xCalculator(CoverFrame, CoverHead);
    let headY = (yCalculator(CoverFrame, CoverHead) - 30);
    let descY = headY + CoverHead.height + 20;
    setPosition(CoverHead, headX, headY);
    setPosition(CoverDesc, descX, descY);
};
let run = () => __awaiter(this, void 0, void 0, function* () {
    yield loadFontHead("Add Heading");
    figma.notify("Project Scafolding Done 👍");
    figma.closePlugin();
});
run();
