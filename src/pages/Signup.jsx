import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../components/Shared/Error';
import HomeHero from '../components/Home/HomeHero';
import { signup } from '../store/actions/authActions';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Must be grater then two characters')
    .max(255, 'Must be shorter then 255 characters ')
    .required('You must enter username'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Must enter a email'),
  password: Yup.string()
    .min(6, 'Must be grater then six characters')
    .required('Must enter a password'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

const Signup = ({ signup, history }) => {
  return (
    <>
      <HomeHero />
      <section className='form-container'>
        <h1 className='large text-dark'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const { username, email, password } = values;
            const newUser = {
              username,
              email,
              password,
              createdAt: Date.now(),
              avatar:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
              isAdmin: false,
              facebook: '',
              linkedin: '',
              fullName: '',
              chat: [],
            };
            signup(newUser);
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
                  type='text'
                  placeholder='Username'
                  name='username'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className={
                    touched.username && errors.username ? 'has-error' : null
                  }
                />
                <Error touched={touched.username} message={errors.username} />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'has-error' : null}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'has-error' : null
                  }
                />
                <Error touched={touched.password} message={errors.password} />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  className={
                    touched.confirmPassword && errors.confirmPassword
                      ? 'has-error'
                      : null
                  }
                />
                <Error
                  touched={touched.confirmPassword}
                  message={errors.confirmPassword}
                />
              </div>
              <button
                type='submit'
                className='btn btn-dark'
                disabled={isSubmitting}
              >
                Signup
              </button>
            </form>
          )}
        </Formik>
        <p className='my-1'>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
