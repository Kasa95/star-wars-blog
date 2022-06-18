import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const FavoriteItem = ({name, id, gender, hairColor, eyeColor})=> {
return (
  <li className="dropdown-item d-flex justify-content-between">
    <a className="link-dark text-decoration-none" href="https://starwars-visualguide.com/assets/img/characters/1.jpg">{name}</a><a className="link-danger text-decoration-none" href="https://starwars-visualguide.com/assets/img/characters/1.jpg">x</a>
  </li>
)
}

export default FavoriteItem