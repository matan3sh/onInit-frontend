import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import { loadCourse, saveCourse } from '../../../store/actions/courseActions';
import { Loader } from '../../Layout/Loader';

import ReviewPreview from './ReviewPreview';
import ReviewAdd from './ReviewAdd';

class ReviewList extends React.Component {
  state = { updatePage: false };

  onDelete = (review) => {
    const { course, saveCourse } = this.props;
    const updatedCoursReviews = course.reviews.filter(
      (currReview) => review._id !== currReview._id
    );
    course.reviews = updatedCoursReviews;
    if (!course.reviews.length) course.rating = 0;
    else course.rating = this.calcRating(course.reviews).toFixed(1);
    saveCourse(course);
    toast('Review successfully deleted', {
      className: 'custom-toast',
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
    this.setState(({ updatePage }) => ({ updatePage: !updatePage }));
  };

  onEdit = (review) => {
    const { course, saveCourse } = this.props;
    const updatedCoursReviews = course.reviews.map((currReview) =>
      review._id === currReview._id ? review : currReview
    );
    course.reviews = updatedCoursReviews;
    course.rating = this.calcRating(course.reviews).toFixed(1);
    saveCourse(course);
    toast('Review successfully updated', {
      className: 'custom-toast',
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
    this.setState(({ updatePage }) => ({ updatePage: !updatePage }));
  };

  onUpdateReviews = () => {
    this.setState(({ updatePage }) => ({ updatePage: !updatePage }));
  };

  calcRating = (reviews) => {
    var ratings = reviews.map((review) => review.rate);
    return (
      ratings.reduce((reviewA, reviewB) => reviewA + reviewB) / ratings.length
    );
  };

  render() {
    const { course } = this.props;
    return (
      <div className='my-1'>
        {course === null ? (
          <Loader />
        ) : (
          <div className='grid-1'>
            <div className='grid-review'>
              <div>
                <ReviewAdd onUpdateReviews={this.onUpdateReviews} />
              </div>
              <div>
                {course.reviews.length === 0 ? (
                  ''
                ) : (
                  <div className='rating-badge'>{course.rating}</div>
                )}
              </div>
            </div>
            {course.reviews ? (
              course.reviews.map((review) => (
                <ReviewPreview
                  key={review._id}
                  review={review}
                  onDelete={this.onDelete}
                  onEdit={this.onEdit}
                />
              ))
            ) : (
              <div
                className='flex-center large text-grey'
                style={{ marginTop: '5rem' }}
              >
                There are currently no reviews
              </div>
            )}
          </div>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
