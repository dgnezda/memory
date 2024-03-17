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
  // Use Fisher-Yates shuffle algo:
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

  if (minutes > 59) {
    const hours = Math.floor(minutes / 60);
    const minutesH = Math.floor(minutes % 60);
    return `${hours}:${minutesH < 10 ? '0' : ''}${minutesH}`;
  } else if (minutes === 0) {
    return `${seconds}.${tenths}`;
  } else {
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
};


export function calculateFinalScore(moves: number, timeTenths: number, mode: string): number {
  // Define initial weights for moves and time
  let weightMoves: number = 0.5;
  let weightTime: number = 0.5;

  // Check if moves or time exceed maximum thresholds
  if (moves > 40 || timeTenths > 1800) {
    return 0;
  }

  // Calculate the balance factor between moves and time
  const balanceFactor: number = Math.abs(moves - (timeTenths / 10)) / Math.max(moves, timeTenths / 10);

  // Adjust weights based on the balance factor
  if (balanceFactor >= 0.3) {
    if (moves > timeTenths / 10) {
      weightMoves = 0.6;
      weightTime = 0.4;
    } else {
      weightMoves = 0.4;
      weightTime = 0.6;
    }
  }

  // Normalize the number of moves and time
  const normalizedMoves: number = Math.min((moves - 8) / (40 - 8), 1);
  const normalizedTime: number = Math.max(Math.min((timeTenths - 8) / (180 - 8), 1), 0);
  console.log(normalizedMoves);
  console.log(normalizedTime);
  
  // Calculate final score
  const finalScore: number = (1 - normalizedMoves) * weightMoves + (1 - normalizedTime) * weightTime;

  // Convert final score to a 0-1000 scale
  let scaledScore: number = Math.round(finalScore * 1000);
  console.log(scaledScore);
  

  if (mode === 'symbols') {
    scaledScore += 100
  } else if (mode === 'arrows') {
    scaledScore += 200
  }
  console.log(scaledScore);
  return scaledScore;
}


export function getWinMessage(): string {
  const winMessages = [
    'Splendid effort! You have impeccably discerned and paired all the cards with utmost finesse.',
    'Ah, top job, mate! You\'ve only gone and matched all them cards like a proper legend! Cheers to you, pal!',
    'Excellent work! You have successfully identified and matched all pairs of cards.',
    'Arrr, ye\'ve plundered the treasure of matches, me hearty! A fine haul indeed, savvy?',
    'Yay! You did it! You found all the cards that are like the card before the one you found and are the same! Good job!',
    'All pairs of cards, matched you have. Well done, young padawan!',
    'Fascinating. You have efficiently identified and matched all pairs of cards. Logical conclusion, indeed.',
    'Congratulations, for you have found all the matches among the cards, as I have foreseen.',
    'You\'ve found all the matches, my friend. Consider it a favor from me to you.',
    'Hail, seeker of matches! You\'ve traversed the labyrinth of cards and emerged triumphant. A wizardry of the mind, indeed!',
    'Elementary, my dear Watson. You\'ve successfully deduced and matched all pairs of cards.'
  ]
  const randomIndex: number = Math.floor(Math.random() * winMessages.length);

  return winMessages[randomIndex];
}