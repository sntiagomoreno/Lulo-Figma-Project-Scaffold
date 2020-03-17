# Project Scaffold
A fork of the Figma plugin by [https://github.com/tushar7d/Project-Scaffold-Figma-Plugin](tushar7d).

### Features
* Auto generates a consistent project structure for your team, so your organization is consistent across teams
* Creates a cover for your project

### How to use
* Fork this repo and install typescript on your machine
* Edit the `code.ts` file
* Run the command `tsc` in your terminal to generate a new code.js file with the changes you've made
* Publish the plugin to your organization internally, use the assets in the asset folder during the publish process
* Success!

### Creating your own project structure
Edit the first few lines of the `code.ts` file to create your own project structure.
```
// Create pages
let FinalUI = figma.createPage();
let WorkInProgress = figma.createPage();
let Scratch = figma.createPage();
```
First declare the pages you want to create.
```
// Set page names
figma.currentPage.name = "⬜️ Cover";
FinalUI.name = "✅ Ready For Development";
WorkInProgress.name = "🚧 Work In Progress";
Scratch.name = "❌ Scratch";
```
Then set the names of these pages. We try and keep our project stucture simple so we're not removing pages everytime we run this plugin.
