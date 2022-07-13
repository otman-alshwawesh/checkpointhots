import React from 'react';
import {useLocation ,useNavigate } from 'react-router-dom';
import {Rate} from "antd";
// import "./Router.css";


function Router() {
  const navigate = useNavigate();
  const location = useLocation()
  return (
    <div>
      <img src={location.state.imag} alt="test" height="450px"/>
      <h1>
        {location.state.name}
        </h1>
        <Rate disabled defaultValue={location.state.rate} />
        <h2 style={{ color:"red"}}>
          {location.state.description}
          </h2>
        <iframe width="640" height="360" src={location.state.trailer} title={location.state.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button onClick={()=> navigate("/")}>GO BACK</button>
        </div>

  )
};

export default Router;

