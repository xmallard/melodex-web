// src/types/enums.ts

export enum Genre {
  HipHop = 'Hip-Hop',
  RnB = 'R&B',
  Pop = 'Pop',
  Trap = 'Trap',
  Afrobeats = 'Afrobeats',
  Electronic = 'Electronic',
  House = 'House',
  Alternative = 'Alternative',
  Jazz = 'Jazz',
  Reggae = 'Reggae',
  LoFi = 'Lo-fi',
  Indie = 'Indie',
  Rock = 'Rock',
  Experimental = 'Experimental'
}

export enum Status {
  Planning = 'planning',
  Active = 'active',
  Recording = 'recording',
  Mixing = 'mixing',
  Mastering = 'mastering',
  Complete = 'complete',
  Draft = 'draft',
  Pending = 'pending',
  Approved = 'approved'
}

export enum Priority {
  Low = 'low',
  Medium = 'medium',
  High = 'high'
}

export enum Role {
  Owner = 'owner',
  Editor = 'editor',
  Viewer = 'viewer'
}

export enum Mood {
  Happy = 'Happy',
  Energetic = 'Energetic',
  Dreamy = 'Dreamy',
  Chill = 'Chill',
  Sad = 'Sad',
  Angry = 'Angry'
}

export enum ReminderType {
  Session = 'session',
  Deadline = 'deadline',
  Review = 'review'
}

export enum DocumentType {
  SplitSheet = 'split-sheet',
  RoyaltyReport = 'royalty-report',
  Contract = 'contract',
  Other = 'other'
}
