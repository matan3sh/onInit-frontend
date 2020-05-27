import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/actions/authActions';

const Navbar = ({ loggedInUser, logout }) => {
  return (
    <nav className='navbar'>
      <h1>
        <NavLink to='/' exact>
          <i className='fas fa-graduation-cap'></i> onInit
        </NavLink>
      </h1>
      <ul>
        {loggedInUser ? (
          <>
            <li>
              <NavLink
                to={`/user/${loggedInUser._id}`}
                exact
                activeClassName='nav-active'
              >
                Hello, {loggedInUser.username}
              </NavLink>
            </li>
            <li className='text-white'>
              <a href='/#' className='pointer' onClick={() => logout()}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
