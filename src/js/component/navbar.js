import React, {useContext} from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/NavLogo.png";
import FavoriteItem from "./FavoriteItem.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  
  const {store, actions} = useContext(Context);


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
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
              {store.favorites.map((item,index)=><FavoriteItem key={index} name={item} id={index+1}/>)}
            </ul>
        </div>
      </div>
    </nav>
	);
};
