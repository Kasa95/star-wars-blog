import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "/src/img/NavLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
  			<div className="container">
   			 <a className="navbar-brand" href="#">
      <img src={NavLogo} alt="" width="95" className="d-inline-block m-0"/>
    </a><div class="dropdown">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
  </div>
</nav>
	);
};
