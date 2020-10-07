import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import { Nav, Navbar } from 'react-bootstrap';
import Events from '../Events/Events';

const Home = () => {

  const [events,setEvents] = useState([]);

  useEffect(() => {
    fetch('https://murmuring-meadow-24358.herokuapp.com/volunteer')
    .then(res => res.json())
    .then(data => setEvents(data) )


  },[])


    return (
        <div>
            <Navbar variant="dark" >
    <Navbar.Brand href="#home"> <img src={logo} alt=""/> </Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/donetion">Donetion</Nav.Link>
      <Nav.Link href="/events">Events</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/resister" className="resister">resister</Nav.Link>
      <Nav.Link href="/Admin" className="admin">Admin</Nav.Link>
    </Nav>
  </Navbar>

  <div className="header">

    <h2>I GROW BY HELPING PEOPLE IN NEED </h2>
    <input type="text" placeholder="sreach..."/>
    <input type="submit" value="search"/>
  </div>

  <div class="container">
    <div class="row">
      

      {
        events.map( event => <Events event={event}  ></Events>)

      }
     
    </div>  
  </div>
        </div>
    );
};

export default Home;