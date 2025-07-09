import fs from 'fs';
import path from 'path';

const filePath = path.resolve('package.json');
const backupPath = path.resolve('package.json.bak');

// Load and parse package.json
const pkgRaw = fs.readFileSync(filePath, 'utf-8');
const pkg = JSON.parse(pkgRaw);

// Backup the original
fs.writeFileSync(backupPath, pkgRaw);
console.log('✅ Backup saved to package.json.bak');

// Ensure keys exist or update them
pkg.types = pkg.types || 'src/types';
pkg.bin = pkg.bin || 'index.ts';

// Ensure scripts exist
pkg.scripts = {
  ...pkg.scripts,
  'update-structure': 'node scripts/generate-structure.js',
  'update:scripts': 'ts-node scripts/update-package-json.ts'
};

// Save the updated package.json
fs.writeFileSync(filePath, JSON.stringify(pkg, null, 2));
console.log('✅ package.json updated!');
