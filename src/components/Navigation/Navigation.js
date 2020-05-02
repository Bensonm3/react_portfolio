import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Portfolio">Portfolio</NavLink>
       </div>
    );
}
 
export default Navigation;