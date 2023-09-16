import { useEffect, useState } from "react";
import { INITIAL_BOARD, TURNS, INICIAL_SCORE } from "./utils/constants";
import {
  checkWinnerFrom,
  checkEndGame,
  saveGameToStorage,
  resetGameStorage,
} from "./utils";
import Cell from "./components/Cell";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Board from "./components/Board";
import Score from "./components/Score";
import confetti from "canvas-confetti";
import "./App.css";

export default function App() {
  // initial board status
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem(
      "GAME_TICTACTOE_BOARD"
    );

    return boardFromStorage ? JSON.parse(boardFromStorage) : INITIAL_BOARD;
  });

  // initial turn status
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("GAME_TICTACTOE_TURN");

    return turnFromStorage ?? TURNS.X;
  });

  // initial winner status
  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem(
      "GAME_TICTACTOE_WINNER"
    );

    return winnerFromStorage ? JSON.parse(winnerFromStorage) : null;
  });

  // initial score status
  const [score, setScore] = useState(() => {
    const scoreFromStorage = window.localStorage.getItem(
      "GAME_TICTACTOE_SCORE"
    );

    return scoreFromStorage ? JSON.parse(scoreFromStorage) : INICIAL_SCORE;
  });

  /**
   * @description clear board - allows the board to be cleared without losing the game status
   * @returns {void}
   */
  const clearBoard = () => {
    setBoard(INITIAL_BOARD);
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage({ resetScore: false });
  };

  /**
   * @description reset game - allows the board to be cleared and the game status to be reset
   * @returns {void}
   */
  const resetGame = () => {
    clearBoard();
    setScore(INICIAL_SCORE);
    resetGameStorage();
  };

  /**
   * @description update board - allows the board to be updated
   * @param {number} index - index of the cell to update
   * @returns {void}
   */
  const updateBoard = (index) => {
    // if the cell is already occupied or we already have a winner, we do nothing
    if (board[index] || winner) return;

    // update board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // update turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // check if there is a winner
    const newWinner = checkWinnerFrom(newBoard);

    // if there is a winner, we update the state
    if (newWinner) {
      setWinner(newWinner);

      confetti({
        particleCount: 150,
        spread: 70,
      });

      const newScore = {
        ...score,
        [newWinner]: score[newWinner] + 1,
      };

      setScore(newScore);

      return;
    }

    // check if there is a tie
    if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  // save game status to local storage
  useEffect(() => {
    saveGameToStorage({ board, turn, score, winner });
  }, [turn, board, score, winner]);

  return (
    <main className="board">
      <h1 className="board__title">Tres en Raya</h1>

      <div className="board__options">
        <Button clearBoard={resetGame}>Reiniciar Juego</Button>
        <Button clearBoard={clearBoard}>Limpiar Tablero</Button>
      </div>

      <Score turn={TURNS} score={score} />

      <Board board={board} updateBoard={updateBoard} />

      <section className="board__turn">
        <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
        <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
      </section>

      <Modal winner={winner} resetGame={clearBoard} />
    </main>
  );
}
