import React, { useState } from "react";
import Semaforo from "./trafficLight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

function colorAleatorio(){
    let aleatorioColor = "#";
    for(let i=0;i<6;i++){
        aleatorioColor += Math.floor(Math.random()*16).toString(16);
    }
    return aleatorioColor;
}

const Home = () => {
	const [lights, establecerLuces] = useState(["red", "orange", "green"])

	function agregarLuz() {
		establecerLuces(lights.concat([colorAleatorio()]))
	}

	function quitarLuz() {
		establecerLuces(lights.slice(0, -1));
	}
	
	return (
		<>
		<div className="traffic-light-pole"/>
		<Semaforo luces={lights}></Semaforo>
		<div className="d-flex flex-column justify-content-center mt-1">
			<button onClick={agregarLuz} className="mx-auto bg-primary mb-1" style={{ color: "white" }}>
				<FontAwesomeIcon icon={faPlus} />
			</button>
			<button onClick={quitarLuz} className="mx-auto bg-primary" style={{ color: "white" }}>
				<FontAwesomeIcon icon={faMinus} />
			</button>
		</div>
		</>
	)
};

export default Home;
