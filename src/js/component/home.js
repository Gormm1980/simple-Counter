import React from "react";
import PropTypes from "prop-types";
//create your first component
function Home(props) {
	return (
		<div className="container">
			<div className="clock">
				<i className="far fa-clock"></i>
				<div className="four">{props.PossFour % 10}</div>
				<div className="three">{props.PossThree % 10}</div>
				<div className="two">{props.PossTwo % 10}</div>
				<div className="one">{props.PossOne % 10}</div>
			</div>
		</div>
	);
}
Home.proptypes = {
	PossOne: PropTypes.number,
	PossTwo: PropTypes.number,
	PossThree: PropTypes.number,
	PossFour: PropTypes.number
};

export default Home;
