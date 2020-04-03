import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';

function Header({ scoreA, scoreB }) {
  return (
    <header>
      <h1>Tic-Tac-Toe Game</h1>
      <div className="justify">
        <Score score={scoreA} />
        <Score score={scoreB} />
      </div>
    </header>
  );
}

Header.propTypes = {
  scoreA: PropTypes.object,
  scoreB: PropTypes.object,
};
export default Header;
