import { type ClassValue, clsx } from "clsx"
import { format, parseISO } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateFormatter(dateString: string) {
  const date = parseISO(dateString);
  const formattedDate = format(date, "LLLL  d, yyyy");
  return formattedDate;
}