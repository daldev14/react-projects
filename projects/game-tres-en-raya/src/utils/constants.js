// Description: Constants of the game.

export const INITIAL_BOARD = Array(9).fill(null);

export const TURNS = {
  X: "❌",
  O: "⚪",
};

export const INICIAL_SCORE = {
  [TURNS.X]: 0,
  [TURNS.O]: 0,
};

export const OPTIONS_TO_WIN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
