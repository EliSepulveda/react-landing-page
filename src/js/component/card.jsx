import React from "react";
import PropTypes from "prop-types";

const cardImageStyle = {
    height: '325px',
    width: '500px'
}

const BootStrapCard = (props) => {
    return (
        <div className="card px-0 justify-content-center">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image"
                styles={cardImageStyle}
			/>
			<div className="card-body d-flex flex-column align-items-center text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<div className="card-footer text-center">
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
    )
};

BootStrapCard.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonUrl: PropTypes.string,
    buttonLabel: PropTypes.string
}

export default BootStrapCard;