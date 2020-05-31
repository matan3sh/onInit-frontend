import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../components/Shared/Error';

import HomeHero from '../components/Home/HomeHero';
import { login } from '../store/actions/authActions';
import Facebook from '../components/User/Facebook';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Must enter an email'),
  password: Yup.string().required('Must enter a password'),
});

const Login = ({ login, history }) => {
  const toCourses = () => {
    history.push('/');
  };

  return (
    <>
      <HomeHero />
      <section className='form-container'>
        <h1 className='large text-dark'>Login</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Sign into your account
        </p>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            login(values);
            history.push('/');
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className='form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <input
                  name='email'
                  type='email'
                  placeholder='Email Address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'has-error' : null}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className='form-group'>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'has-error' : null
                  }
                />
                <Error touched={touched.password} message={errors.password} />
              </div>
              <div>
                <button
                  type='submit'
                  className='btn btn-dark mb-1'
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  Login
                </button>
                <div className='text-center'>
                  <Facebook toCourses={toCourses} />
                </div>
              </div>
            </form>
          )}
        </Formik>
        <p className='my-1 text-center'>
          Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
