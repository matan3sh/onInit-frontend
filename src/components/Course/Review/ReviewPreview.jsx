import React from 'react';

import moment from 'moment';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../../Shared/Error';

import ReviewRate from './ReviewRate';

const validationSchema = Yup.object().shape({
  msg: Yup.string()
    .min(3, 'Must be more then 3 characters')
    .max(255, 'Must be shorter then 255 characters')
    .required('Must write yout opinion'),
});

export class ReviewPreview extends React.Component {
  state = { isEdit: false };

  onEdit = () => {
    this.setState(({ isEdit }) => ({ isEdit: !isEdit }));
  };

  render() {
    const { review, onDelete, onEdit } = this.props;
    return (
      <div className='card-review grid-mid-hald'>
        <div className='review-left text-center'>
          <img
            className='avatar-review'
            src={review.byUser.avatar}
            alt='user-avatar'
            style={{ width: '50px' }}
          />
          <div>{review.byUser.username}</div>
          <div className='text-grey'>
            <p className='text-small text-grey'>
              {moment(review.createdAt).fromNow()}
            </p>
          </div>
          <p className='dot-review' style={{ fontSize: '14px' }}>
            {review.rate}
          </p>
          <ReviewRate rate={(100 / 5) * `${review.rate}`} />
          <div className='my-1 flex-center'>
            <button className='btn' onClick={this.onEdit}>
              <i className='fas fa-edit'></i>
            </button>
            <button className='btn' onClick={() => onDelete(review)}>
              <i className='fas fa-trash-alt'></i>
            </button>
          </div>
        </div>
        {this.state.isEdit ? (
          <Formik
            initialValues={{ msg: review.msg, rate: review.rate }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              const { _id, byUser } = this.props.review;
              setSubmitting(true);
              this.onEdit();
              const updatedReview = {
                _id,
                byUser,
                msg: values.msg,
                rate: values.rate,
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
                    rows='6'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.msg}
                    className={touched.msg && errors.msg ? 'has-error' : null}
                  />
                  <Error touched={touched.msg} message={errors.msg} />
                  <dir className='flex-center'>
                    <p style={{ marginBottom: '0px' }} className='lead'>
                      {values.rate}
                    </p>
                    <input
                      type='range'
                      name='rate'
                      min='1'
                      max='5'
                      step='0.1'
                      style={{ width: '30%' }}
                      value={values.rate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                  </dir>
                  <button
                    type='submit'
                    className='btn btn-dark my-1'
                    disabled={isSubmitting}
                  >
                    Save
                  </button>
                </div>
              </form>
            )}
          </Formik>
        ) : (
          <div className='grid-1'>
            <div>{review.msg}</div>
          </div>
        )}
      </div>
    );
  }
}
