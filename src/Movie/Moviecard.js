import React from 'react';
import {Link } from "react-router-dom";
import { Card} from 'react-bootstrap';
import Rating from './Rating';
import "../App.css"
function Moviecard(props) {
  return (
       
   <Link to={`movie/${props.e.id}`} state={props.e}>
     
      <Card  style={{ margin : "1%", width: '18rem' }}>
  <Card.Img variant="top" height="450px" src={props.e.imag} />
  <Card.Body>
    <Card.Title>{props.e.name}</Card.Title>
    <Card.Text>
   <Rating rt={props.e.rate}/>
    </Card.Text>
  
  </Card.Body>
</Card>

</Link>

  )
}

export default Moviecard