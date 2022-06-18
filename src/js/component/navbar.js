import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/NavLogo.png";
import FavoriteItem from "./FavoriteItem.jsx";

export const Navbar = () => {

  let favorites = [
    "Luke", "C3PO", "Hoth", "Death Star"
  ]

	return (
		<nav className="navbar navbar-dark bg-grey">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={NavLogo} alt="" width="95" className="d-inline-block m-0"/>
        </Link>
        <div className="dropdown">
          <a className="btn btn-outline-warning btn-lg dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {favorites.map((item,index)=><FavoriteItem key={index} name={item} id={index+1}/>)}
            </ul>
        </div>
      </div>
    </nav>
	);
};
