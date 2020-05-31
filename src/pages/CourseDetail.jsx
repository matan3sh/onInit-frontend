import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourse } from '../store/actions/courseActions';
import { loadEnrolls } from '../store/actions/enrollActions';
import { Loader } from '../components/Layout/Loader';
import HeroDetail from '../components/Layout/HeroDetail';

import { CourseHeader } from '../components/Course/Detail/CourseHeader';
import { CourseEnroll } from '../components/Course/Detail/CourseEnroll';
import CourseAbout from '../components/Course/Detail/CourseAbout';
import { CourseSchool } from '../components/Course/Detail/CourseSchool';
import { CourseGallery } from '../components/Course/Detail/CourseGallery';
import ReviewList from '../components/Course/Review/ReviewList';

class CourseDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    setTimeout(() => {
      this.props.loadCourse(id);
      this.props.loadEnrolls();
    }, 500);
  }

  render() {
    const { course, enrolls } = this.props;
    return (
      <>
        {course === null ? (
          <Loader />
        ) : (
          <>
            <HeroDetail course={course} />
            <section className='container'>
              <Link to='/course' className='btn my-1'>
                Back To Courses
              </Link>
              <div className='course-details-grid'>
                <div className='my-1 left-side-details'>
                  <CourseHeader course={course} />
                  <CourseGallery course={course} />
                </div>
                <CourseAbout course={course} />
              </div>
              <CourseEnroll course={course} enrolls={enrolls} />
              <CourseSchool course={course} />
              <ReviewList />
            </section>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.courseApp.course,
    enrolls: state.enrolls.enrolls,
  };
};

const mapDispatchToProps = {
  loadCourse,
  loadEnrolls,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
