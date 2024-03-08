import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Function for merging Tailwind CSS preset styles with additional styles
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const formatDateToLocal = (
    dateStr: string,
    locale: string = 'en-US',
  ) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
  };

export function generateRandomBoard(): number[] {
  const unshuffledBoard = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  const shuffle = (array: number[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  const shuffledBoard = shuffle(unshuffledBoard)
  return shuffledBoard
}

export const getRandomCardFaces = (arr: string[] | JSX.Element[], num: number) => {
  const shuffledABC = [...arr].sort(() => 0.5 - Math.random())
  return shuffledABC.slice(0, num)
}

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const tenths = Math.floor((time % 1) * 10); // Extract tenths of a second

  if (minutes === 0) {
    return `${seconds}.${tenths}`;
  } else {
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${tenths}`;
  }
};

// export const formatEndTime = (time: number): string => {
//   const minutes = Math.floor(time / 60);
//   const seconds = time % 60;
//   const milliseconds = Math.floor((time % 1) * 1000);

//   if (minutes === 0) {
//     return `${seconds}s${milliseconds < 100 ? '0' : ''}${milliseconds}ms`;
//   } else {
//     return `${minutes}m${seconds < 10 ? '0' : ''}${seconds}s${milliseconds < 100 ? '0' : ''}${milliseconds}ms`;
//   }
// };