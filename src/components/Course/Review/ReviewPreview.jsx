import React from 'react';

import moment from 'moment';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Shared/Error';
import { FaStar } from 'react-icons/fa';

import ReviewRate from './ReviewRate';

const validationSchema = Yup.object().shape({
  msg: Yup.string()
    .min(3, 'Must be more then 3 characters')
    .max(255, 'Must be shorter then 255 characters')
    .required('Must write yout opinion'),
});

export class ReviewPreview extends React.Component {
  state = { isEdit: false, rating: this.props.review.rate };

  onEdit = () => {
    this.setState(({ isEdit }) => ({ isEdit: !isEdit }));
  };

  render() {
    const { review, onDelete, onEdit } = this.props;
    return (
      <div className='card-review grid-card-review'>
        <div className='review-left text-center'>
          <img
            className='avatar-review'
            src={review.byUser.avatar}
            alt='user-avatar'
          />
          <div>{review.byUser.username}</div>
          <div className='text-grey'>
            <p className='text-small text-grey'>
              {moment(review.createdAt).fromNow()}
            </p>
          </div>
        </div>
        {this.state.isEdit ? (
          <Formik
            initialValues={{ msg: review.msg, rate: this.state.rating }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const { _id, byUser } = this.props.review;
              setSubmitting(true);
              this.onEdit();
              const updatedReview = {
                _id,
                byUser,
                msg: values.msg,
                rate: this.state.rating,
                createdAt: Date.now(),
              };
              onEdit(updatedReview);
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
              <form
                onSubmit={handleSubmit}
                className='form'
                style={{ paddingRight: '1rem' }}
              >
                <div className='form-group'>
                  <textarea
                    type='text'
                    name='msg'
                    rows='3'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.msg}
                    className={touched.msg && errors.msg ? 'has-error' : null}
                  />
                  <Error touched={touched.msg} message={errors.msg} />
                  <div>
                    <button
                      onClick={() => this.setState({ isEdit: false })}
                      className='btn my-1'
                    >
                      <i className='fas fa-arrow-left'></i>
                    </button>
                    <button
                      type='submit'
                      className='btn btn-primary'
                      disabled={isSubmitting}
                    >
                      Save
                    </button>
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            onClick={() =>
                              this.setState({ rating: ratingValue })
                            }
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
                </div>
              </form>
            )}
          </Formik>
        ) : (
          <div className='grid-1'>
            <div style={{ float: 'right' }}>
              <button className='badge bg-light pointer' onClick={this.onEdit}>
                <i className='fas fa-edit'></i>
              </button>
              <button
                className='badge bg-light pointer'
                onClick={() => onDelete(review)}
              >
                <i className='fas fa-trash '></i>
              </button>
            </div>
            <div className='content-card-wrapper'>
              <ReviewRate rate={(100 / 5) * `${review.rate}`} />{' '}
              <span style={{ marginLeft: '5px' }}>{review.rate}</span>
            </div>
            <div>{review.msg}</div>
          </div>
        )}
      </div>
    );
  }
}
