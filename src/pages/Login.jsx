import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Must enter an email'),
  password: Yup.string().required('Must enter a password'),
});

export const Login = () => {
  return (
    <section className='form-container'>
      <h1 className='large text-primary'>Login</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into your account
      </p>
      <Formik initialValues={{ email: '', password: '' }}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form className='form'>
            <div className='form-group'>
              <input
                name='email'
                type='email'
                placeholder='Email Address'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className='form-group'>
              <input
                name='password'
                type='password'
                placeholder='Password'
                minlength='6'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Login
            </button>
          </form>
        )}
      </Formik>
      <p className='my-1'>
        Don't have an account?{' '}
        <Link to='/signup' exact>
          Sign Up
        </Link>
      </p>
    </section>
  );
};
