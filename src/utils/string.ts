// Utility functions for working with strings

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const kebabToTitle = (str: string): string => {
  return str
    .split('-')
    .map(capitalize)
    .join(' ');
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};
