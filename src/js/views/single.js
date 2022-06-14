import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Details from "../component/Details.jsx";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		
		<>

			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}


			<Details />
			
		</>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
