// src/data/scripts/init-data.ts

import fs from 'fs';
import path from 'path';

const dataDir = path.join(__dirname, '..');

const write = (filename: string, content: string) => {
  fs.writeFileSync(path.join(dataDir, filename), content, 'utf-8');
};

write('genres.ts', `export const genres = [
  { id: 'hiphop', label: 'Hip-Hop' },
  { id: 'rnb', label: 'R&B' },
  { id: 'pop', label: 'Pop' },
  { id: 'trap', label: 'Trap' },
  { id: 'afrobeats', label: 'Afrobeats' },
  { id: 'electronic', label: 'Electronic' },
  { id: 'house', label: 'House' },
  { id: 'alternative', label: 'Alternative' },
  { id: 'jazz', label: 'Jazz' },
  { id: 'reggae', label: 'Reggae' },
  { id: 'lofi', label: 'Lo-fi' },
  { id: 'indie', label: 'Indie' },
  { id: 'rock', label: 'Rock' },
  { id: 'experimental', label: 'Experimental' }
];
`);

write('statuses.ts', `export const statuses = [
  { id: 'draft', label: 'Draft' },
  { id: 'planning', label: 'Planning' },
  { id: 'active', label: 'Active' },
  { id: 'recording', label: 'Recording' },
  { id: 'mixing', label: 'Mixing' },
  { id: 'mastering', label: 'Mastering' },
  { id: 'complete', label: 'Complete' },
  { id: 'pending', label: 'Pending' },
  { id: 'approved', label: 'Approved' }
];
`);

// (Repeat this pattern for priorities, moods, documentTypes, reminders, roles...)
//ts-node src/data/scripts/init-data.ts
