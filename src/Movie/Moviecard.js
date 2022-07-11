import React from 'react'
import { Card} from 'react-bootstrap';
import Rating from './Rating';
import "../App.css"
function Moviecard(props) {
  return (
       
   
     
      <Card  style={{ margin : "1%", width: '18rem' }}>
  <Card.Img variant="top" height="450px" src={props.e.imag} />
  <Card.Body>
    <Card.Title>{props.e.name}</Card.Title>
    <Card.Text>
   <Rating rt={props.e.rate}/>
    </Card.Text>
  
  </Card.Body>
</Card>

    

  )
}

export default Moviecard