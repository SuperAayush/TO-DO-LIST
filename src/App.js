import React from 'react'
import { Router, Outlet } from 'react-location';
import { routes, location } from "./components/router"
import "./styling/app.css"
import { Provider } from 'react-redux';



const App = () => {
  
  return (
    
    <Router routes={routes} location={location}>
    <div>
        <Outlet />
      </div>
      </Router>
     
    );
}

export default App;
