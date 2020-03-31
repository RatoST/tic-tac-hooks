import React from "react";
import PropTypes from "prop-types";

// Square component - each square of the game is button with 2 props X and O
function Square({ value, onClick }) {
  return(
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
}

export default Square;