import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">About</NavLink> <a> | </a>
          <NavLink to="/Contact">Contact</NavLink> <a> | </a>
          <NavLink to="/Portfolio">Portfolio</NavLink>
       </div>
    );
}
 
export default Navigation;