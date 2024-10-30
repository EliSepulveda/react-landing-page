import React, { useState, useEffect } from "react";
import SecondsTimer from "./timer";

//create your first component
const Home = () => {
	const [timerSeconds, setCount] = useState(0);
	useEffect(() => {
        const interval = setInterval(() => {
            setCount(timerSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timerSeconds]);

	return (
		<>
		<SecondsTimer seconds={timerSeconds}></SecondsTimer>
		</>
	);
};

export default Home;
