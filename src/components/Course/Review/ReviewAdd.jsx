import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Shared/Error';

import ReviewRate from './ReviewRate';
import { Loader } from '../../Layout/Loader';
import { toast } from 'react-toastify';

import { makeId } from '../../../services/utils';
import { loadCourse, saveCourse } from '../../../store/actions/courseActions';

const validationSchema = Yup.object().shape({
  msg: Yup.string()
    .min(3, 'Must be more then 3 characters')
    .max(255, 'Must be shorter then 255 characters')
    .required('Must write yout opinion'),
});

class ReviewAdd extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => this.props.loadCourse(id), 500);
  }

  calcRating = (reviews) => {
    var ratings = reviews.map((review) => review.rate);
    return (
      ratings.reduce((reviewA, reviewB) => reviewA + reviewB) / ratings.length
    );
  };

  render() {
    const { course, saveCourse, history } = this.props;
    return (
      <section className='form-container'>
        {course === null ? (
          <Loader />
        ) : (
          <>
            <Link to={`/course/${course._id}/review`} className='btn btn-dark'>
              Back To Reviews
            </Link>
            <Link to={`/course/${course._id}`} className='btn'>
              Back to Course
            </Link>
            <div className='add-review-card'>
              <h1 className='large text-primary'>Add Review</h1>
              <p className='lead'>
                <i className='fas fa-pen-square'></i> Write your honest opinion
              </p>
              <div className='text-center'>
                <p>
                  Course: <span className='text-primary'> {course.name}</span>
                </p>
              </div>
              <Formik
                initialValues={{ rate: 1, msg: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(true);
                  const review = {
                    _id: makeId(),
                    byUser: {
                      _id: makeId(),
                      username: 'Guest_User',
                      avatar:
                        'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                    },
                    msg: values.msg,
                    rate: values.rate,
                    createdAt: Date.now(),
                  };
                  if (!course.reviews) course.reviews = [];
                  course.reviews.unshift(review);
                  course.rating = this.calcRating(course.reviews).toFixed(1);
                  saveCourse(course);
                  toast('Review successfully added', {
                    className: 'custom-toast',
                    draggable: true,
                    position: toast.POSITION.TOP_CENTER,
                  });
                  history.push(`/course/${course._id}/review`);
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
                    <div className='form-group text-center'>
                      <p style={{ marginBottom: '0px' }} className='lead'>
                        {values.rate}
                      </p>
                      <ReviewRate rate={(values.rate * 100) / 5} />
                      <input
                        type='range'
                        name='rate'
                        min='1'
                        max='5'
                        step='0.1'
                        value={values.rate}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        type='text'
                        name='msg'
                        placeholder='Write Your Review...'
                        rows='6'
                        value={values.msg}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          touched.msg && errors.msg ? 'has-error' : null
                        }
                      />
                      <Error touched={touched.msg} message={errors.msg} />
                      <div>
                        <img
                          className='school-img'
                          src={course.school.img}
                          alt=''
                        />
                        <span>{course.school.name}</span>
                      </div>
                    </div>
                    <div className='mb-2'>
                      <img
                        src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                        alt=''
                        className='bootcamp-user-avatar'
                      />
                      <span>
                        <span className='text-grey'>From </span>
                        <span className='text-dark text-bold'>User</span>
                      </span>
                    </div>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.courseApp.course,
  };
};

const mapDispatchToProps = {
  loadCourse,
  saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAdd);
