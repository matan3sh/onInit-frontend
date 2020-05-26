import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';

import { Loader } from '../components/Layout/Loader';
import UserCourseList from '../components/User/UserCourseList';

class UserProfile extends Component {
  componentDidMount() {
    setTimeout(() => this.props.loadCourses(), 1000);
  }

  render() {
    const { courses, loggedInUser } = this.props;
    return (
      <section>
        {loggedInUser === null ? (
          <h1>You are not authorized</h1>
        ) : (
          <>
            <h1 className='large text-primart'>User Profile</h1>
            <p className='lead'>
              <i className='fas fa-user'></i> Welcome User
            </p>
            <div className='dash-buttons'>
              <a href='/#' className='btn'>
                <i className='fas fa-user-circle text-primary'></i> Edit Profile
              </a>
              <a href='/#' className='btn'>
                <i className='fab fa-black-tie text-primary'></i> Add Course
              </a>
              <a href='/#' className='btn'>
                <i className='fas fa-graduation-cap text-primary'></i> Enroll
                Course
              </a>
            </div>

            <h2 className='my-2'>Manage Courses</h2>
            {!courses.length ? (
              <Loader />
            ) : (
              <UserCourseList courses={courses} />
            )}
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
