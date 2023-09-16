import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  clearBoard: PropTypes.func.isRequired,
};

export default function Button({ children, clearBoard }) {
  const handleClick = () => {
    clearBoard();
  };

  return (
    <button onClick={handleClick} className="board__btn">
      {children}
    </button>
  );
}
