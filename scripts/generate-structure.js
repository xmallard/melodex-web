const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Create the app-structure folder if it doesn't exist
const outputDir = path.join(__dirname, "../app-structure");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Increase the depth level to ensure deeper files like scripts/git/auto-push.sh are captured
exec('npx tree -I "node_modules|.git|.expo|dist|build" -a -L 6', (err, stdout, stderr) => {
  if (err) {
    console.error("❌ Error generating structure:", err);
    return;
  }

  const outputPath = path.join(outputDir, "structure.txt");
  fs.writeFileSync(outputPath, stdout);
  console.log("✅ App structure saved to app-structure/structure.txt");
});
