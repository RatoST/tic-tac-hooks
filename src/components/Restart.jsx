import React from "react";
import PropTypes from "prop-types";


function Restart({onClick}) {

    return (
        <button className="restart" onClick={onClick}>
            Replay
        </button>
    )

}

Restart.PropTypes = {
    onClick: PropTypes.func
}

export default Restart;