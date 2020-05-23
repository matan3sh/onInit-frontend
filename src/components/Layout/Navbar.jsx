import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <NavLink to='/' exact>
          <i className='fas fa-graduation-cap'></i> onInit
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to='/course' exact activeClassName='nav-active'>
            Browse
          </NavLink>
        </li>
        <li>
          <NavLink to='/user/id' exact activeClassName='nav-active'>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/signup' exact activeClassName='nav-active'>
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact activeClassName='nav-active'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
