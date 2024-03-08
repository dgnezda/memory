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

export function calculateFinalScore(moves: number, timeTenths: number): number {
  // Define weight for moves and time
  const weightMoves: number = 0.5; // Adjust this weight as needed
  const weightTime: number = 0.5; // Adjust this weight as needed

  // Normalize the number of moves and time
  const normalizedMoves: number = (moves - 8) / (45 - 8);
  const normalizedTime: number = (timeTenths / 10 - 21) / (110 - 21); // Adjust maximum time as needed

  // Calculate final score
  const finalScore: number = (1 - normalizedMoves) * weightMoves + (1 - normalizedTime) * weightTime;

  // Convert final score to a 0-100 scale
  const scaledScore: number = Math.round(finalScore * 100);

  return scaledScore;
}