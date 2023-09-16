import PropTypes from "prop-types";
import Cell from "./Cell";

Modal.propTypes = {
  winner: PropTypes.string,
  resetGame: PropTypes.func,
};

export default function Modal({ winner, resetGame }) {
  if (winner === null) return null;

  const modalTitle = winner === false ? "Empate" : "Ganó";

  const handleClick = () => {
    resetGame();
  };

  return (
    <section className="modal">
      <div className="modal__container">
        <header>
          <h2 className="modal__title">{modalTitle}</h2>
        </header>

        <div className="modal__content">{winner && <Cell>{winner}</Cell>}</div>

        <footer className="modal__footer">
          <button className="board__btn" onClick={handleClick}>
            Otra vez
          </button>
        </footer>
      </div>
    </section>
  );
}
