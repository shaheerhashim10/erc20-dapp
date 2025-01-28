import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ParseHashToRender = (
  hash: string,
  options?: Partial<{
    initLength: number;
    endLength: number;
  }>
) => string;

export const parseHashToRender: ParseHashToRender = (
  hash,
  { initLength = 4, endLength = 4 } = {}
) => {
  return (
    hash.substring(0, initLength) +
    '...' +
    hash.substring(hash.length - endLength, hash.length)
  );
};
