import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// format a number into Indian number format
export function formatIndianNumber(value: string): string {
  const cleaned = value.replace(/[^0-9]/g, "");
  const num = parseInt(cleaned, 10);
  if (isNaN(num)) return "";

  return num.toLocaleString("en-IN"); // Indian number format
}