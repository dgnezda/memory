export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    games_played: number;
    scores: number[];
  };

export type CardType = {
    id: number;
    num: number;
    value: number | JSX.Element;
    visible: boolean;
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

export type UserSettings = {
  mode: 'dark' | 'light'
  // TODO:...back style, front style, front symbol/num, acccessibility/color/b&w..
}