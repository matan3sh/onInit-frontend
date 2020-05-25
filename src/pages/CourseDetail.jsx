import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourse } from '../store/actions/courseActions';
import { Loader } from '../components/Layout/Loader';

import { CourseHeader } from '../components/Course/Detail/CourseHeader';
import { CourseAbout } from '../components/Course/Detail/CourseAbout';
import { CourseSchool } from '../components/Course/Detail/CourseSchool';
import { CourseGallery } from '../components/Course/Detail/CourseGallery';
import ReviewList from '../components/Course/Review/ReviewList';

class CourseDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => this.props.loadCourse(id), 500);
  }

  render() {
    const { course } = this.props;
    return (
      <section>
        {course === null ? (
          <Loader />
        ) : (
          <>
            <Link to='/' className='btn my-1'>
              Back To Courses
            </Link>
            <div className='course-details-grid'>
              <div className='my-1'>
                <CourseHeader course={course} />
                <CourseGallery />
              </div>
              <CourseAbout course={course} />
            </div>
            <CourseSchool course={course} />
            <ReviewList />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
