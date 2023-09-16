import PropTypes from "prop-types";

Cell.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
};

export default function Cell({ children, updateBoard, index, isSelected }) {
  const className = `board__cell ${isSelected ? "board__turn--selected " : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
}
