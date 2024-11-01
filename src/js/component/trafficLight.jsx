import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons"


function obtenerLightStyle(color, brillo) {
    let styles = {
        backgroundColor: color,
        height: "75px",
        width: "75px",
        borderRadius: "50%"
    }
    if (brillo) {
        styles["boxShadow"] = "0 0 50px 15px yellow";
    }
    return styles
}

const Semaforo = (props) => {
    let luces = props.luces;
	const [ color, establecerColor ] = useState("");
    const [ currentIndex, establecerIndice ] = useState(null);


    function establecerSemáforo(light_index) {
        establecerColor(luces[light_index]);
    }

    function rotarLuces() {
        const nextIndex = currentIndex !== null ? (currentIndex + 1) % luces.length : 0;
        establecerIndice(nextIndex);
        establecerSemáforo(nextIndex);
    }

    return (
        <>
        <div className="container d-flex flex-column justify-content-center align-items-center traffic-lights">
            {luces.map((light, index) => (
                <div key={index} style={obtenerLightStyle(light, color === luces[index])} onClick={() => establecerSemáforo(index)}></div>
            ))}
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={rotarLuces} className="mx-auto mt-5 bg-primary" style={{color: "white"}}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>
        </>
    );
};

Semaforo.propTypes = {
    luces: PropTypes.array,
};

export default Semaforo;
