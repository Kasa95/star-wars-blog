import React, {useEffect, useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCard = ({name, id, gender, hairColor, eyeColor})=> {
  const {store, actions} = useContext(Context);

return (
  <div className="d-flex card text-white bg-dark mx-2 gx-0" style={{ width: "18rem"}}>
    <img src={"https://starwars-visualguide.com/assets/img/characters/"+id+".jpg"} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Gender: {gender}<br></br>Hair Color: {hairColor}<br></br>Eye Color: {eyeColor}</p>
      <div className="d-flex justify-content-between">
        <Link to={"/single/"+id} className="btn btn btn-secondary">Learn more!</Link>
        <a href="#" className="btn btn-outline-warning" onClick={actions.addFavorite({name})}>♥</a>
      </div>   
    </div>
</div>
)
}

export default CharacterCard