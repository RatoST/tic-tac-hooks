import React from "react";
import PropTypes from "prop-types";

function Score(name,countX, countO){
    
    const {score} = [name,countX, countO]
          
    return (
        <div>
           {score}            
        </div>
    )

}

Score.propTypes = {
    name: PropTypes.string,
    countX: PropTypes.number,
    countO: PropTypes.number
}

export default Score;