import React from "react";

//create your first component
const Jumbotron = () => {
	return (
		<div className="jumbotron pb-5 bg-light mb-5">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </p>
		</div>
	);
};

export default Jumbotron;
