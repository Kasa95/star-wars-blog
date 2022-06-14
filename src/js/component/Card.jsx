import React from "react";

const Card = ()=> {
return (
  <div className="d-flex card mx-2 gx-0" style={{ width: "18rem"}}>
    <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Luke Skywalker</h5>
      <p className="card-text">Gender: Male<br></br>Hair Color: Blond<br></br>Eye Color: Blue</p>
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-outline-primary">Learn more!</a>
        <a href="#" className="btn btn-outline-warning">♥</a>
      </div>   
    </div>
</div>
)
}

export default Card