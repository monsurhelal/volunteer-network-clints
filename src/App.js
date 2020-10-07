import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Resister from './components/Resister/Resister';
import PrivateROUte from './components/PrivateRoute/PrivateROUte';
import Admin from './components/Admin/Admin';
import EventsList from './components/EventsList/EventsList';

     
export const UserContext  = createContext();

function App() {

  const [logedInUser,setlogedInUser] = useState({});

  return (
    
    <UserContext.Provider value={[logedInUser,setlogedInUser]}>
    <Router>
      <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <PrivateROUte path="/resister/:id">
         <Resister/>
      </PrivateROUte>
      <Route path="/eventslist">
         <EventsList/>
      </Route>
      <Route path="/admin">
        <Admin/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
