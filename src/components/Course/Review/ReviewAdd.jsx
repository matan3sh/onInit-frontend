import React from 'react';
import { connect } from 'react-redux';
import SocketService from '../../../services/SocketService';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Shared/Error';

import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { makeId } from '../../../services/utils';
import { loadCourse, updateCourse } from '../../../store/actions/courseActions';

// const socket = io('/localhost:3030');

const validationSchema = Yup.object().shape({
  msg: Yup.string()
    .min(3, 'Must be more then 3 characters')
    .max(255, 'Must be shorter then 255 characters')
    .required('Must write your opinion'),
});

class ReviewAdd extends React.Component {
  componentDidMount() {
    SocketService.setup();
    SocketService.on('add-review', (course) => this.props.updateCourse(course));
  }

  state = { addReview: false, rating: 1 };

  calcRating = (reviews) => {
    var ratings = reviews.map((review) => review.rate);
    return (
      ratings.reduce((reviewA, reviewB) => reviewA + reviewB) / ratings.length
    );
  };

  render() {
    const { course, updateCourse, onUpdateReviews, loggedInUser } = this.props;
    // socket.on('add-review', (course) => {
    //   console.log(course);
    //   this.props.saveCourse(course);
    // });
    return (
      <div className='grid-1'>
        {this.state.addReview ? (
          <Formik
            initialValues={{ msg: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              var sendByUser = {};
              if (loggedInUser !== null) {
                console.log(loggedInUser);
                sendByUser = {
                  _id: loggedInUser._id,
                  username: loggedInUser.username,
                  avatar: loggedInUser.avatar,
                };
              } else {
                sendByUser = {
                  _id: makeId(),
                  username: 'Guest_User',
                  avatar:
                    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                };
              }
              setSubmitting(true);
              const review = {
                _id: makeId(),
                byUser: sendByUser,
                msg: values.msg,
                rate: this.state.rating,
                createdAt: Date.now(),
              };
              if (!course.reviews) course.reviews = [];
              course.reviews.unshift(review);
              course.rating = this.calcRating(course.reviews).toFixed(1);
              updateCourse(course);
              SocketService.emit('send-review', course);

              toast('Review successfully added', {
                className: 'custom-toast',
                draggable: true,
                position: toast.POSITION.TOP_CENTER,
              });
              this.setState({ addReview: false, rating: 1 });
              onUpdateReviews();
              resetForm();
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
                <div className='my-1'>
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type='radio'
                          name='rating'
                          value={ratingValue}
                          onClick={() => this.setState({ rating: ratingValue })}
                        />
                        <FaStar
                          className='star'
                          color={
                            ratingValue <= this.state.rating
                              ? '#ffc107'
                              : '#e4e5e9'
                          }
                          size={25}
                        />
                      </label>
                    );
                  })}
                </div>
                <textarea
                  type='text'
                  name='msg'
                  placeholder='Write Your Review...'
                  rows='4'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.msg}
                  className={touched.msg && errors.msg ? 'has-error' : null}
                />
                <Error touched={touched.msg} message={errors.msg} />
                <div>
                  <button
                    onClick={() => this.setState({ addReview: false })}
                    className='btn my-1'
                  >
                    <i className='fas fa-arrow-left'></i>
                  </button>
                  <button
                    type='submit'
                    className='btn btn-primary my-1'
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        ) : (
          <button
            className='btn'
            onClick={() => this.setState({ addReview: true })}
          >
            Add Review
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.courseApp.course,
    loggedInUser: state.auth.loggedInUser,
  };
};

const mapDispatchToProps = {
  loadCourse,
  updateCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAdd);
