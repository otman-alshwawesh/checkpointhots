import React from "react";
import "../App.css";
import FilterByTitle from "./Filterbytitle";
import FilterByRating from "./Filterbyrating";
// import "./Filter.css";
function Filter(props) {
  return (
    <div className="filter">
      <FilterByTitle name={props.name} setName={props.setName} />
      <FilterByRating rate={props.rate} setRate={props.setRate} />
    </div>
  );
}

export default Filter;