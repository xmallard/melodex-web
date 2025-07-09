// src/data/generate-dropdowns.ts

import {
  Genre,
  Status,
  Priority,
  Role,
  Mood,
  ReminderType,
  DocumentType
} from '@/types/enums';

export type Option = { id: string; label: string };

function enumToOptions<T extends Record<string, string>>(enumObj: T): Option[] {
  return Object.entries(enumObj).map(([key, value]) => ({
    id: value,
    label: key.replace(/([A-Z])/g, ' $1').trim()
  }));
}

export const genreOptions = enumToOptions(Genre);
export const statusOptions = enumToOptions(Status);
export const priorityOptions = enumToOptions(Priority);
export const roleOptions = enumToOptions(Role);
export const moodOptions = enumToOptions(Mood);
export const reminderTypeOptions = enumToOptions(ReminderType);
export const documentTypeOptions = enumToOptions(DocumentType);
