

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

let setPosition = (node, spacex, spacey) => { node.relativeTransform = [[1, 0, spacex], [0, 1, spacey]] };

let xCalculator = (container: FrameNode, element: TextNode) => { return ((container.width / 2) - (element.width / 2)); }

let yCalculator = (container: FrameNode, element: TextNode) => { return ((container.height / 2) - (element.height / 2)); }

let loadFontHead = async (name: string) => {
  await figma.loadFontAsync({ family: "Whitney", style: "Bold" });
  CoverHead.fontName = { family: "Whitney", style: "Bold" };
  CoverHead.characters = name;
  CoverHead.fontSize = 36;
  CoverHead.textAlignHorizontal = "CENTER";

}

let layoutText = () => {
  let descX = xCalculator(CoverFrame, CoverDesc);
  let headX = xCalculator(CoverFrame, CoverHead);
  let headY = (yCalculator(CoverFrame, CoverHead) - 30);
  let descY = headY + CoverHead.height + 20;

  setPosition(CoverHead, headX, headY);
  setPosition(CoverDesc, descX, descY);
}

let run = async () => {
  await loadFontHead("Add Heading");
  figma.notify("Project Scafolding Done 👍")
  figma.closePlugin();
}

run();