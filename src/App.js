import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Moviecard from "../src/Movie/Moviecard";
import n2 from "./imagt/n2.jpeg";
import n3 from "./imagt/n3.jpg";
import n4 from "./imagt/n4.jpg" ;
import n5 from "./imagt/n5.jpg";
import n6 from "./imagt/n6.jpg";
import n7 from "./imagt/n7.jpg";
import n8 from "./imagt/n8.jpg";
import Movielist from './Movie/Movielist';
import Modal1 from './modd/Modal';
import Filter from "./Filter/Filter";
var movie =[
  { id: Math.random(),
    imag:n2,
    name:"WRONGTURN",
    rate:3  
  },{
    id: Math.random(),
    imag:n3,
    name:"THE Conjuring",
    rate:2
  }
  ,{
    id: Math.random(),
    imag:n4,
    name:"Fast and Furious",
    rate:4
  }
  ,{
    id: Math.random(),
    imag:n5,
    name:"300",
    rate:5
  }
  ,{
    id: Math.random(),
    imag:n6,
    name:"BATMAN",
    rate:3
  }
  ,{
    id: Math.random(),
    imag:n7,
    name:"KARATE KID",
    rate:1
  }
  ,{
    id: Math.random(),
    imag:n8,
    name:"THE HILL",
    rate:5
  }
]
function App() {
  const [moviedatas,setMoviedatas] = useState(movie);
  const [name,setName] = useState("")
  const [rate,setRate] = useState(0)
  return (
    <div className="App">
      <Filter name={name} setName={setName} rate={rate} setRate={setRate}/>
      <Modal1 moviedatas={moviedatas} setMoviedatas={setMoviedatas} />
        <Movielist moviedatas={moviedatas} name={name} rate={rate}/>
    </div>
  );
}

export default App;
