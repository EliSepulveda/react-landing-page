import React from "react";
import PropTypes from "prop-types";
import TimerCard from "./card";

function getSecondsString(seconds) {
    let text = seconds.toString();
    if (text.length > 6) {
        return text
    }
    return "0".repeat(6-text.length) + text

}


const SecondsTimer = (props) => {
    const seconds = getSecondsString(props.seconds)
    console.log("seconds: " + seconds)
    return (
        <>
            <div className="container-fluid justify-content-center mx-auto d-flex flex-row align-items-center text-center timer-container">
                <div className="tcard" key="icon">
                    <TimerCard isIcon={true} />
                </div>
                {seconds.split("").map((num, i) => (
                    <div className="tcard" key={i + 1}>
                        <TimerCard isIcon={false} numero={num} />
                    </div>
                ))}
            </div>
        </>
    );
};

SecondsTimer.propTypes = {
    seconds: PropTypes.number
};

export default SecondsTimer;
