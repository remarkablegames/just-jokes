# Changelog

## [1.0.12](https://github.com/remarkablegames/just-jokes/compare/v1.0.11...v1.0.12) (2024-02-10)


### Bug Fixes

* **hooks:** fix race condition in useSetHost ([8bb7ff1](https://github.com/remarkablegames/just-jokes/commit/8bb7ff1235a26eeb1b5febe21e5076ccdc8c3a9a))

## [1.0.11](https://github.com/remarkablegames/just-jokes/compare/v1.0.10...v1.0.11) (2024-02-02)


### Bug Fixes

* **helpers:** generate unique joke ids ([2e47694](https://github.com/remarkablegames/just-jokes/commit/2e47694e0dec2409c721899ee20bba48435f9cb2))

## [1.0.10](https://github.com/remarkablegames/just-jokes/compare/v1.0.9...v1.0.10) (2024-02-02)


### Bug Fixes

* **hooks:** fix name bug caused by mutated initial player state ([7b97e03](https://github.com/remarkablegames/just-jokes/commit/7b97e03ac00077b33ab99b05fcb27cdccd1814a6))

## [1.0.9](https://github.com/remarkablegames/just-jokes/compare/v1.0.8...v1.0.9) (2024-02-02)


### Bug Fixes

* **components:** play laugh track when joke is created ([2ac49b2](https://github.com/remarkablegames/just-jokes/commit/2ac49b2d9f0b5641c00d76d2cf11ab5c52811db0))

## [1.0.8](https://github.com/remarkablegames/just-jokes/compare/v1.0.7...v1.0.8) (2024-02-01)

### Bug Fixes

- **components:** add missing label to Placeholder input ([f667707](https://github.com/remarkablegames/just-jokes/commit/f6677076ac44a71fcc6bb575fc5f92decd94cf20))

## [1.0.7](https://github.com/remarkablegames/just-jokes/compare/v1.0.6...v1.0.7) (2024-02-01)

### Bug Fixes

- **pages:** use textStyle in ErrorBoundary ([32dcad6](https://github.com/remarkablegames/just-jokes/commit/32dcad6f9d7ddae44d5c4d530d3344061e27c4d0))

### Performance Improvements

- **sounds:** don't preload sounds and load when played ([c333364](https://github.com/remarkablegames/just-jokes/commit/c333364c91ac7285bba8886eaa2b13db61baa938))

## [1.0.6](https://github.com/remarkablegames/just-jokes/compare/v1.0.5...v1.0.6) (2024-01-31)

### Bug Fixes

- **pages:** apply textStyle to NotFound ([393f095](https://github.com/remarkablegames/just-jokes/commit/393f09572140706676079fb44f9d8c414d86d480))

## [1.0.5](https://github.com/remarkablegames/just-jokes/compare/v1.0.4...v1.0.5) (2024-01-31)

### Bug Fixes

- **components:** render joke preview ([acbd725](https://github.com/remarkablegames/just-jokes/commit/acbd7258b1a12b8a74225fd778e888360685b9e1))
- **components:** stop and play background music in Nickname ([85b8a92](https://github.com/remarkablegames/just-jokes/commit/85b8a9266fc1a54579ab00c8bdda8a82faa08829))

### Performance Improvements

- **components:** optimize with useCallback in Joke ([eb40355](https://github.com/remarkablegames/just-jokes/commit/eb40355a756626bc75b60aa11dd3304338bba267))
- **components:** optimize with useCallback in Placeholder ([546e6b3](https://github.com/remarkablegames/just-jokes/commit/546e6b32e3e062217080ed75283740eef1e84095))

## [1.0.4](https://github.com/remarkablegames/just-jokes/compare/v1.0.3...v1.0.4) (2024-01-31)

### Bug Fixes

- **hooks:** remove player on beforeunload event ([56e1bd4](https://github.com/remarkablegames/just-jokes/commit/56e1bd4819c26fd3119a6e9d0d4bf6eb8cee52d1))

## [1.0.3](https://github.com/remarkablegames/just-jokes/compare/v1.0.2...v1.0.3) (2024-01-30)

### Bug Fixes

- **components:** render Skeleton in Players if nickname is empty ([2e29c52](https://github.com/remarkablegames/just-jokes/commit/2e29c529d414948bc546f1be00971c66c3754d8c))

## [1.0.2](https://github.com/remarkablegames/just-jokes/compare/v1.0.1...v1.0.2) (2024-01-30)

### Bug Fixes

- **index:** add og:image ([acf95d6](https://github.com/remarkablegames/just-jokes/commit/acf95d6d55e0d7822f728d6a069b64825332d17d))
- **index:** add twitter:image ([7067b23](https://github.com/remarkablegames/just-jokes/commit/7067b23587e84f611d0ee6ff3befe53d62c3d81d))
- **index:** use absolute url for og:image and twitter:image ([481b46a](https://github.com/remarkablegames/just-jokes/commit/481b46a009ba8a23b757bbe908e8412036593847))

## [1.0.1](https://github.com/remarkablegames/just-jokes/compare/v1.0.0...v1.0.1) (2024-01-30)

### Bug Fixes

- **components:** make Game and Lobby mobile friendly ([e2972b7](https://github.com/remarkablegames/just-jokes/commit/e2972b7887eec870a173db417cef2c19066eb888))
- **components:** reverse the column order in small screens ([134a1f0](https://github.com/remarkablegames/just-jokes/commit/134a1f011e2adb61004bf1e31e800c8f91a6b9b6))
- **index:** add background-color and remove background no-repeat ([525c589](https://github.com/remarkablegames/just-jokes/commit/525c5894fa7528433094e181c04d986a93bf5f38))
- **sounds:** lower crowdLaugh volume ([93845ab](https://github.com/remarkablegames/just-jokes/commit/93845ab2603f351b17b5b1b48d3795279f64487e))

## 1.0.0 (2024-01-29)

### Features

- **components:** render Mute button in Header ([12efa4a](https://github.com/remarkablegames/just-jokes/commit/12efa4aa9229f93b0ef10f7c877cb6984fb714cc))

### Bug Fixes

- **components:** render joke as HTML in Vote ([53aec37](https://github.com/remarkablegames/just-jokes/commit/53aec37fc6f33b73a05726d0ecd058763654e753))
