export enum SettingsName {
  maxPlayers = 'maxPlayers',
  maxRounds = 'maxRounds',
  maxSeconds = 'maxSeconds',
}

export enum SettingsDefaultValue {
  maxPlayers = 4,
  maxRounds = 3,
  maxSeconds = 30,
}

export interface SettingsData {
  jokeIds: number[];
  maxPlayers: number;
  maxRounds: number;
  maxSeconds: number;
}
