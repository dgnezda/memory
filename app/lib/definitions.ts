export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Card = {
    value: number;
    visibile: boolean; 
}

export type Score = {
  id: string;
  name: string;
  score: string | number;
  date: string;
}

export type HighScoreTable = {
  id: string;
  name: string;
  score: string | number;
  date: string;
}