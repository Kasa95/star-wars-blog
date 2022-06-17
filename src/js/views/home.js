import React, {useContext} from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);

	console.log(store.people);
	console.log(store.people.name);

	return (<>
	<div className="container py-2">
		<h2>Characters</h2>
		<div className="row flex-row flex-nowrap">
			{store.people.map((item,index)=><Card key={index} name={item.name} id={item.uid} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}/>)}
		</div>
	</div>
		<div className="container py-2">
		<h2>Planets</h2>
		<div className="row flex-row flex-nowrap">
			{store.planets.map((item,index)=><Card key={index} name={item.name} id={item.uid} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}/>)}
		</div>
	</div>
		<div className="container py-2">
		<h2>Starships</h2>
		<div className="row flex-row flex-nowrap">
			{store.starships.map((item,index)=><Card key={index} name={item.name} id={item.uid} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}/>)}
		</div>
	</div>
	</>
);
}
