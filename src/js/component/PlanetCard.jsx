import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const PlanetCard = ({name, id, population, terrain})=> {
return (
  <div className="d-flex card text-white bg-dark mx-2 gx-0" style={{ width: "18rem"}}>
    <img src={"https://starwars-visualguide.com/assets/img/planets/"+id+".jpg"} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Population: {population}<br></br>Terrain: {terrain}</p>
      <div className="d-flex justify-content-between">
        <Link to={"/single/"+id} className="btn btn-secondary">Learn more!</Link>
        <a href="#" className="btn btn-outline-warning">♥</a>
      </div>   
    </div>
</div>
)
}

export default PlanetCard