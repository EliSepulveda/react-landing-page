import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TimerCard = (props) => {
    return (
        <div className="timerCard">
            {props.isIcon && <FontAwesomeIcon icon={faClock} style={{color: "#ffffff",}} />}
            {
                !props.isIcon && props.numero
            }
        </div>
    );
};

TimerCard.propTypes = {
    isIcon: PropTypes.bool,
    numero: PropTypes.number
};

export default TimerCard;
