import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [onePeople, setOnePeople] = useState()

	const {theid} = useParams();

	useEffect(()=>{
		actions.getOnePeople(theid)
	})

	var onePeopleProperties= (store.onePeople.properties);

	console.log(store.onePeople.properties);

	return (
		
		<div className="container py-4">
		<div className="row">
			<img src="https://via.placeholder.com/800x600" alt="" className="col-6"/>
			<div className="col-6">
			<h2 className="text-center text-warning">a</h2> 
			{/* seguir aquí */}
			<p className="text-center text-warning">{store.onePeople.description}</p>
			</div>
		</div>
		<hr className="text-danger text-warning" />
		<table className="table text-danger text-center table-borderless">
		<tbody>
			<tr>
			<th scope="col">Name</th>
			<th scope="col">Birth year</th>
			<th scope="col">Gender</th>
			<th scope="col">Height</th>
			<th scope="col">Skin Color</th>
			<th scope="col">Eye Color</th>
			</tr>
			<tr>
			<td>Luke Skywalker</td>
			<td>19BBY</td>
			<td>male</td>
			<td>172</td>
			<td>fair</td>
			<td>blue</td>
			</tr>
		</tbody>
		</table>
		</div>
		
	);
};

Single.propTypes = {
	match: PropTypes.object
};
