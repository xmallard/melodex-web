import fs from 'fs';
import path from 'path';

const dataDir = path.join(__dirname, '..');
const outFile = path.join(__dirname, '../../types/enums.ts');

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const files = [
  'genres',
  'statuses',
  'priorities',
  'documentTypes',
  'reminders',
  'moods',
  'roles'
];

const getEnumName = (name: string) => capitalize(name.slice(0, -1)); // genres → Genre

const run = () => {
  let output = `import { z } from 'zod';\n\n`;

  for (const file of files) {
    const fullPath = path.join(dataDir, `${file}.ts`);
    const module = require(fullPath);
    const values = module[file].map((item: any) => `'${item.id}'`);
    const enumName = getEnumName(file);

    output += `export const ${enumName}Schema = z.enum([${values.join(', ')}]);\n`;
    output += `export type ${enumName} = z.infer<typeof ${enumName}Schema>;\n\n`;

    output += `export enum ${enumName}Enum {\n`;
    for (const item of module[file]) {
      output += `  ${item.id.toUpperCase().replace(/-/g, '_')} = '${item.id}',\n`;
    }
    output += `}\n\n`;
  }

  fs.writeFileSync(outFile, output, 'utf-8');
  console.log('✅ enums.ts generated');
};

run();
