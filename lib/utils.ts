import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @param path Takes the path
 * @returns Main domain with path
 */
export function absoluteUrl(path: String) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}
