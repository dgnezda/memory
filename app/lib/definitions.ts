export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    games_played: number;
    scores: Score[];
    settings: Settings
  };

export type CardType = {
    id: number;
    num: number;
    value: number | JSX.Element;
    visible: boolean;
}

export type Score = {
  id: number;
  user: User;
  game_mode: string;
  score: number;
  date: string;
  time: number | string;
}

export type Settings = {
  user: User;
  board_size: number;
  sound: boolean;
  timer: boolean;
  back_color: number;
}