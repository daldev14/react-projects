import PropTypes from "prop-types";

Score.propTypes = {
  turn: PropTypes.object.isRequired,
  score: PropTypes.object.isRequired,
};

export default function Score({ turn, score }) {
  return (
    <div className="board__score">
      <h2 className="board__title board__title--score">Puntaje:</h2>
      <span className="score__turn">{`${turn?.X}   ${score[turn?.X]}`}</span>
      <span className="score__turn">{`${turn?.O}   ${score[turn?.O]}`}</span>
    </div>
  );
}
