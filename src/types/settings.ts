export enum SettingsName {
  players = 'players',
  rounds = 'rounds',
  timer = 'timer',
}

export enum SettingsDefaultValue {
  players = 4,
  rounds = 3,
  timer = 30,
}

export type SettingsData = Record<keyof typeof SettingsDefaultValue, number>;
