import React from "react";

const Details = ()=> {
return (
<div className="container py-4">
  <div className="row">
    <img src="https://via.placeholder.com/800x600" alt="" className="col-6"/>
    <div className="col-6">
      <h2 className="text-center">Luke Skywalker</h2>
      <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, modi sint minus repellat atque enim molestiae in non dolore mollitia blanditiis, corporis maxime repellendus magni, saepe asperiores commodi alias animi! Delectus, modi sint minus repellat atque enim molestiae in non dolore mollitia blanditiis, corporis maxime repellendus magni, saepe asperiores commodi alias animi!</p>
      </div>
  </div>
  <hr className="text-danger" />
  <table className="table text-danger text-center table-borderless">
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Birth year</th>
      <th scope="col">Gender</th>
      <th scope="col">Height</th>
      <th scope="col">Skin Color</th>
      <th scope="col">Eye Color</th>
    </tr>
    <tr>
      <td>Luke Skywalker</td>
      <td>19BBY</td>
      <td>male</td>
      <td>172</td>
      <td>fair</td>
      <td>blue</td>
    </tr>
  </tbody>
</table>
</div>
)
}

export default Details