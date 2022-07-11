import React from 'react'
import Moviecard from './Moviecard'
import "../App.css";
function Movielist(props) {
  return (
    <div className='cardimag'>
 {props.moviedatas
        .filter((e) => e.name.toLowerCase().includes(props.name.toLowerCase()))
        .filter((e) => e.rate >= props.rate)
        .map((e, id) => (
          <Moviecard e={e} key={e.id} />
        ))}        
    </div>
  )
}

export default Movielist