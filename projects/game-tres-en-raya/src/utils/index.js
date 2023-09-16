import { OPTIONS_TO_WIN } from "./constants";

/**
 * @description - check if there is a winner
 * @param {*} board - array de 9 posiciones
 * @returns {string} - X, O, null
 */
export function checkWinnerFrom(board) {
  for (const option of OPTIONS_TO_WIN) {
    const [a, b, c] = option;
    if (board[a] && board[a] === board[b] && board[a] === board[c])
      return board[a];
  }

  return null;
}

/**
 * @description - check if the game is finished
 * @param {*} board - array de 9 posiciones
 * @returns {string} - X, O, null
 */
export function checkEndGame(board) {
  return board.every((cell) => cell !== null);
}

/**
 * @descrption - Save game status in localStorage
 * @param {*} param0 - { board, turn, score, winner }
 */
export const saveGameToStorage = ({ board, turn, score, winner }) => {
  // guardar aqui partida
  window.localStorage.setItem("GAME_TICTACTOE_BOARD", JSON.stringify(board));
  window.localStorage.setItem("GAME_TICTACTOE_TURN", turn);
  window.localStorage.setItem("GAME_TICTACTOE_SCORE", JSON.stringify(score));
  window.localStorage.setItem("GAME_TICTACTOE_WINNER", JSON.stringify(winner));
};

/**
 * @description - Delete game state in localStorage
 * @param {*} param0 - { resetScore } - resetScore = true -> resetea el score
 */
export const resetGameStorage = ({ resetScore = true } = {}) => {
  window.localStorage.removeItem("GAME_TICTACTOE_BOARD");
  window.localStorage.removeItem("GAME_TICTACTOE_TURN");
  window.localStorage.removeItem("GAME_TICTACTOE_WINNER");
  if (resetScore) window.localStorage.removeItem("GAME_TICTACTOE_SCORE");
};
