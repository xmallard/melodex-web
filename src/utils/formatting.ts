// src/utils/formatting.ts

// --- Types for safety ---
export type Status =
  | 'draft'
  | 'planning'
  | 'active'
  | 'recording'
  | 'mixing'
  | 'mastering'
  | 'complete'
  | 'pending'
  | 'approved';

export type Priority = 'low' | 'medium' | 'high';

// --- Date Formatting Utilities ---

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const formatDateRelative = (dateString: string): string => {
  const inputDate = new Date(dateString);
  const date = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate()
  );

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffInMs = today.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return 'Today';
  if (diffInDays === 1) return 'Yesterday';
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// --- Tag/Label Styling Helpers ---

export const getStatusColor = (status: Status): string => {
  const statusColors: Record<Status, string> = {
    draft: 'bg-gray-100 text-gray-800 border-gray-200',
    planning: 'bg-blue-100 text-blue-800 border-blue-200',
    active: 'bg-green-100 text-green-800 border-green-200',
    recording: 'bg-orange-100 text-orange-800 border-orange-200',
    mixing: 'bg-purple-100 text-purple-800 border-purple-200',
    mastering: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    complete: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    approved: 'bg-green-100 text-green-800 border-green-200'
  };
  return statusColors[status] || statusColors.draft;
};

export const getPriorityColor = (priority: Priority): string => {
  const priorityColors: Record<Priority, string> = {
    low: 'bg-gray-100 text-gray-800 border-gray-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-red-100 text-red-800 border-red-200'
  };
  return priorityColors[priority] || priorityColors.medium;
};

// --- String Utilities ---

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();
};
