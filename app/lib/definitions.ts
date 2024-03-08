export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    games_played: number;
    scores: Score[];
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
  user: User;
  time: number | string;
}

