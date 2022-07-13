import React, { useState } from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Moviecard from "../src/Movie/Moviecard";
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
import Router from './Movie/Router';
var movie =[
  { id: Math.random(),
    imag:n2,
    name:"WRONGTURN",
    rate:3,
    description :"Friends hiking the Appalachian Trail are confronted by 'The Foundation', a community of people who have lived in the mountains for hundreds of years.",
    trailer :"https://www.youtube.com/embed/R9ePqsorHJU",
  },{
    id: Math.random(),
    imag:n3,
    name:"THE Conjuring",
    rate:2,
    description :"Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    trailer :"https://www.youtube.com/embed/juwDufVKAQk",
  }
  ,{
    id: Math.random(),
    imag:n4,
    name:"Fast and Furious",
    rate:4,
    description :"Brian O'Conner, back working for the FBI in Los Angeles, teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
    trailer :"https://www.youtube.com/embed/uSDNZeRX_1Y",
  }
  ,{
    id: Math.random(),
    imag:n5,
    name:"300",
    rate:5,
    description :"King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
    trailer :"https://www.youtube.com/embed/heZBfRFE_GY",
  }
  ,{
    id: Math.random(),
    imag:n6,
    name:"BATMAN",
    rate:3,
    description :"The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
    trailer :"https://www.youtube.com/embed/u34gHaRiBIU",
  }
  ,{
    id: Math.random(),
    imag:n7,
    name:"KARATE KID",
    rate:1,
    description :"A martial arts master agrees to teach karate to a bullied teenager.",
    trailer :"https://www.youtube.com/embed/r_8Rw16uscg",
  }
  ,{
    id: Math.random(),
    imag:n8,
    name:"THE HILL",
    rate:5,
    description :"A woman, Rose, goes in search for her adopted daughter within the confines of a strange, desolate town called Silent Hill.",
    trailer :"https://www.youtube.com/embed/oof4Zz-7HXs",
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
      <Routes>
        <Route path='/' element={<Movielist moviedatas={moviedatas} name={name} rate={rate}/>}/>
      <Route path='movie/:id' element={<Router/>} />
      </Routes>
        
    </div>
  );
}

export default App;
