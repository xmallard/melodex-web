import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind CSS classes intelligently.
 *
 * Example:
 *   cn('px-2', condition && 'bg-red-500')
 *   → returns 'px-2 bg-red-500' if condition is true
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
