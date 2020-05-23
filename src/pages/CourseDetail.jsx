import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCourse } from '../store/actions/courseActions';
import { Loader } from '../components/Layout/Loader';

import { CourseHeader } from '../components/Course/Detail/CourseHeader';
import { CourseAbout } from '../components/Course/Detail/CourseAbout';
import { CoursePicture } from '../components/Course/Detail/CoursePicture';
import { CourseSchool } from '../components/Course/Detail/CourseSchool';

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
            <Link to='/course' className='btn'>
              Back To Courses
            </Link>
            <div className='profile-grid my-1'>
              <CourseHeader course={course} />
              <CoursePicture />
              <CourseAbout course={course} />
              <CourseSchool course={course} />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
