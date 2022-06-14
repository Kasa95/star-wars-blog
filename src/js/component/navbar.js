import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/NavLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
  			<div className="container">
   			 <a className="navbar-brand" href="#">
      <img src={NavLogo} alt="" width="95" className="d-inline-block m-0"/>
    </a><div className="dropdown">
  <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  </div>
</nav>
	);
};
