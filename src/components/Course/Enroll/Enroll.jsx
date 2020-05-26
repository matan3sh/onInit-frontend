import React from 'react';
import Modal from 'react-modal';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Shared/Error';

Modal.setAppElement('#root');

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Must be grater then 2 characters')
    .max(24, 'Must be shorter then 24 characters')
    .required('Must enter your full name'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Must enter an email'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

export const Enroll = ({ enroll, onClose, loggedInUser, course }) => {
  return (
    <Modal
      isOpen={enroll}
      onRequestClose={() => onClose()}
      style={{
        overlay: {},
        content: {
          padding: '5px',
        },
      }}
    >
      <div className='form-enroll'>
        <div className='block-center'>
          <h1>
            Hello{' '}
            <span className='text-primary text-bold'>
              {' '}
              {loggedInUser.username}
            </span>
          </h1>
          <div className='my-3' style={{ fontSize: '28px' }}>
            We are glad you chose to register for the course{' '}
            <p className='text-bold'>{course.name}</p> <br />
            <div>
              <span>By</span>{' '}
              <img className='school-img' src={course.school.img} alt='' />
              <span>{course.school.name}</span>
            </div>
            <p className='my-3'>
              Please confirm your details and course representatives will be
              back soon{' '}
            </p>
          </div>
          <div className='form-container'>
            <Formik
              initialValues={{
                fullName: '',
                email: loggedInUser.email,
                phone: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                console.log(values);
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
                      name='fullName'
                      type='text'
                      placeholder='Full Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fullName}
                      className={
                        touched.fullName && errors.fullName ? 'has-error' : null
                      }
                    />
                    <Error
                      touched={touched.fullName}
                      message={errors.fullName}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      name='email'
                      type='email'
                      placeholder='Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        touched.email && errors.email ? 'has-error' : null
                      }
                    />
                    <Error touched={touched.email} message={errors.email} />
                  </div>
                  <div className='form-group'>
                    <input
                      name='phone'
                      type='text'
                      placeholder='Phone'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      className={
                        touched.phone && errors.phone ? 'has-error' : null
                      }
                    />
                    <Error touched={touched.phone} message={errors.phone} />
                  </div>

                  <div className='form-group'>
                    <button className='btn' onClick={() => onClose()}>
                      Close
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting}
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Modal>
  );
};