const fs = require("fs");
const path = require("path");

// Define which data files to include
const files = [
  "documentTypes",
  "formDefaults",
  "genres",
  "milestones",
  "moods",
  "priorities",
  "reminders",
  "roles",
  "statuses",
];

const dataDir = path.resolve(__dirname, "..");
const outputDir = path.resolve(__dirname, "../../types");
const outputFile = path.join(outputDir, "enums.ts");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let content = `// AUTO-GENERATED FILE. DO NOT EDIT.\n\n`;

for (const file of files) {
  const dataPath = path.join(dataDir, `${file}.ts`);
  if (!fs.existsSync(dataPath)) {
    console.warn(`⚠️ File not found: ${dataPath}`);
    continue;
  }

  const mod = require(dataPath);
  const data = mod.default;

  const enumName = file
    .replace(/s$/, "") // remove plural
    .replace(/(?:^|_)(\w)/g, (_, c) => c.toUpperCase()); // snake to PascalCase

  const typeName = `${enumName}Type`;

  const values = Array.isArray(data)
    ? data.map((item) => `  | "${item.id}"`).join("\n")
    : "";

  content += `export type ${typeName} =\n${values};\n\n`;
}

fs.writeFileSync(outputFile, content);
console.log(`✅ enums.ts generated at: ${outputFile}`);
