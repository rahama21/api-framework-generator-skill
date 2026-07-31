const fs = require("fs");
const path = require("path");

module.exports = function generatePlaywrightJS() {

    console.log("\nGenerating Playwright JavaScript framework...");

    const source = path.join(__dirname, "../../templates/playwright-js");
    const destination = path.join(__dirname, "../../generated-framework");

    if (fs.existsSync(destination)) {
        fs.rmSync(destination, { recursive: true, force: true });
        console.log("Old generated framework removed.");
    }

    fs.cpSync(source, destination, { recursive: true });

    console.log("Framework generated successfully!");
};