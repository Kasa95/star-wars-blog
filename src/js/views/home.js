import React, {useContext} from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import StarshipCard from "../component/StarshipCard.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);

	console.log(store.people);
	console.log(store.planets);
	console.log(store.starships);

	return (<>
	<div className="container py-2">
		<h2 className="text-warning">Characters</h2>
		<div className="row flex-row flex-nowrap">
			{store.people.map((item,index)=><CharacterCard key={index} name={item.name} id={index+1} gender={item.gender} hairColor={item.hair_color} eyeColor={item.eye_color}/>)}
		</div>
	</div>
		<div className="container py-2">
		<h2 className="text-warning">Planets</h2>
		<div className="row flex-row flex-nowrap">
			{store.planets.map((item,index)=><PlanetCard key={index} name={item.name} id={index+1} population={item.population} terrain={item.terrain}/>)}
		</div>
	</div>
		<div className="container py-2">
		<h2 className="text-warning">Starships</h2>
		<div className="row flex-row flex-nowrap">
			{store.starships.map((item,index)=><StarshipCard key={index} name={item.name} id={index+1} passengers={item.passengers} crew={item.crew}/>)}
		</div>
	</div>
	</>
);
}
