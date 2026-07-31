const readline = require("readline");
const fs = require("fs");
const generatePlaywrightJS = require("./generator/frameworks/playwright-js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=================================");
console.log(" API Framework Generator");
console.log("=================================\n");

rl.question("Enter your prompt:\n\n> ", (prompt) => {

    const text = prompt.toLowerCase();

    const framework = text.includes("playwright")
        ? "Playwright"
        : "Unknown";

    const language = text.includes("typescript")
        ? "TypeScript"
        : "JavaScript";

    const hasGet = text.includes("get");
    const hasPost = text.includes("post");

    console.log("\nDetected Configuration");
    console.log("----------------------");
    console.log("Framework :", framework);
    console.log("Language  :", language);
    console.log("GET API   :", hasGet ? "Yes" : "No");
    console.log("POST API  :", hasPost ? "Yes" : "No");
    if (framework === "Playwright" && language === "JavaScript") {
    generatePlaywrightJS();
}
 

    rl.close();

});