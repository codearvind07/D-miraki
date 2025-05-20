import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ServicesProps {
  title: string;
  description: string;
  image: string;
  readmore: string
}
