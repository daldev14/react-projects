import Cell from "./Cell";
import PropTypes from "prop-types";

Board.propTypes = {
  board: PropTypes.array.isRequired,
  updateBoard: PropTypes.func.isRequired,
};

export default function Board({ board, updateBoard }) {
  return (
    <section className="board__game">
      {board.map((value, index) => {
        return (
          <Cell key={index} updateBoard={updateBoard} index={index}>
            {value}
          </Cell>
        );
      })}
    </section>
  );
}
