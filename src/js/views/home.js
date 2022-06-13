import React, {useContext} from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (<>
	<div className="container-fluid py-2">
		<h2>Characters</h2>
		<div className="row flex-row flex-nowrap">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
		<div className="container-fluid py-2">
		<h2>Planets</h2>
		<div className="row flex-row flex-nowrap">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
		<div className="container-fluid py-2">
		<h2>Starships</h2>
		<div className="row flex-row flex-nowrap">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	</div>
	</>
);
}
