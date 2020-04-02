import React from "react";
import PropTypes from "prop-types";

function Score({score}){
    
    const {name,countX, countO} = score;
          
    return (
        <div className="score">
           <span>   {name}  |</span>            
           <span>   X = {countX}    |</span>
           <span>   O = {countO}    |</span>           
        </div>
    )

}

Score.propTypes = {
    score: PropTypes.func,
    name: PropTypes.string,
    countX: PropTypes.number,
    countO: PropTypes.number
}

export default Score;