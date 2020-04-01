import React from "react";
import PropTypes from "prop-types";


function Restart({onClick}) {

    return (
        <button className="restart" onClick={onClick}>
            Replay
        </button>
    )

}

Restart.propTypes = {
    onClick: PropTypes.func
}

export default Restart;