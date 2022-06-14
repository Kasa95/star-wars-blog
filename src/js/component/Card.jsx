import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const Card = ({name, id, gender, hairColor, eyeColor})=> {
return (
  <div className="d-flex card mx-2 gx-0" style={{ width: "18rem"}}>
    <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Gender: {gender}<br></br>Hair Color: {hairColor}<br></br>Eye Color: {eyeColor}</p>
      <div className="d-flex justify-content-between">
        <Link to={"/single/"+id} className="btn btn-outline-primary">Learn more!</Link>
        <a href="#" className="btn btn-outline-warning">♥</a>
      </div>   
    </div>
</div>
)
}

export default Card