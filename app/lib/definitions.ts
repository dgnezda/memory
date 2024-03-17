export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    settings: Settings;
    scores: Score[];
    game_stats: GameStatistic[];
  };

export type CardType = {
    id: number;
    num: number;
    value: number | JSX.Element;
    visible: boolean;
}

export type Score = {
  id: string;
  game: Game;
  user: User;
  turns: number;
  score: number;
  time: number;
}

export type Settings = {
  id: string;
  user: User;
  user_id: string;
  board_size: number;
  sound: boolean;
  card_color: number;
  default_game_mode: string;
}

export type GameStatistic = {
  id: string;
  turns: number;
  time_per_turn: number[];
  accuracy: number;
  game_completion_status: boolean;
  date: Date;
  user: User;
  user_id: string;
  game: Game;
  game_id: number;
}

export type Game = {
  id: number;
  mode: string;
  scores: Score[]
  game_stats: GameStatistic[]
}