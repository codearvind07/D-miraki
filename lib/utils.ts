import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export const getInitials = (name: string) => {
  if (!name) return '';
  const parts = name.split(' ');
  const initials = parts.map(part => part.charAt(0).toUpperCase());
  return initials.slice(0, 2).join('');
};
export interface ServicesProps {
  title: string;
  description: string;
  image: string;
  readmore: string
}

