export interface GameState {
  hostId: string;
  jokeIds: number[];
  maxPlayers: number;
  maxRounds: number;
  maxSeconds: number;
  round: number;
}
