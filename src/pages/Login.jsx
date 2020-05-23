import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <section className='form-container'>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into your account
      </p>
      <form action='dashboard.html' className='form'>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' minlength='6' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
      <p className='my-1'>
        Don't have an account?{' '}
        <Link to='/signup' exact>
          Sign Up
        </Link>
      </p>
    </section>
  );
};
