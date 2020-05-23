import React from 'react';
import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <section className='form-container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form action='dashboard.html' className='form'>
        <div className='form-group'>
          <input type='text' placeholder='Name' required />
        </div>
        <div className='form-group'>
          <input type='email' placeholder='Email Address' />
          <small className='form-text'>Select a representative image</small>
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Password' minlength='6' />
        </div>
        <div className='form-group'>
          <input type='password' placeholder='Confirm Password' minlength='6' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Signup
        </button>
      </form>
      <p className='my-1'>
        Already have an account?{' '}
        <Link to='/login' exact>
          Login
        </Link>
      </p>
    </section>
  );
};
