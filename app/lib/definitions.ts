export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    games_played: Game[]
    scores: number[];
  };

export type Score = {
  id: string;
  name: string;
  score: string | number;
  date: string;
}

export type Game = {
  id: string;
  mode: 'numbers' | 'letters' | 'symbols' | 'arrows'
  user: User;
  score: number;
  time: number;
  date: string;
}


export type UserSettings = {
  mode: 'dark' | 'light'
  // TODO:...back style, front style, front symbol/num, acccessibility/color/b&w..
}