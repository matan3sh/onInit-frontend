import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourses } from '../store/actions/courseActions';
import { loadEnrolls, saveEnroll } from '../store/actions/enrollActions';
import { toast } from 'react-toastify';

import { Loader } from '../components/Layout/Loader';
import HomeHero from '../components/Home/HomeHero';
import UserCourseList from '../components/User/UserCourseList';
import UserEnrollList from '../components/User/UserEnrollList';
import UserEnrollManageList from '../components/User/UserEnrollManageList';

class UserProfile extends Component {
  state = { manageCourses: true, myEnrolls: false, manageEnrolls: false };

  componentDidMount() {
    setTimeout(() => {
      this.props.loadCourses();
      this.props.loadEnrolls();
    }, 1000);
  }

  onManageCourses = () => {
    this.setState({
      manageCourses: true,
      myEnrolls: false,
      manageEnrolls: false,
    });
  };

  onMyEnrolls = () => {
    this.setState({
      manageCourses: false,
      myEnrolls: true,
      manageEnrolls: false,
    });
  };

  onManageEnrolls = () => {
    this.setState({
      manageCourses: false,
      myEnrolls: false,
      manageEnrolls: true,
    });
  };

  onConfirmEnroll = (enroll) => {
    let updatedEnroll = { ...enroll, isConfirm: true };
    this.props.saveEnroll(updatedEnroll);
    toast('Enroll successfully confirmed', {
      className: 'custom-toast',
      draggable: true,
      position: toast.POSITION.TOP_CENTER,
    });
  };

  render() {
    const { courses, loggedInUser, enrolls } = this.props;
    const { manageCourses, manageEnrolls, myEnrolls } = this.state;
    return (
      <section>
        <HomeHero />
        {loggedInUser === null ? (
          <h1>You are not authorized</h1>
        ) : (
          <div className='container'>
            <Link to='/course' className='btn my-1'>
              Back To Courses
            </Link>
            <h1 className='large text-primary'>User Profile</h1>
            <p className='lead'>
              <i className='fas fa-user'></i> Welcome{' '}
              <span className='text-primary'>{loggedInUser.username}</span>
            </p>
            <div className='dash-buttons my-1'>
              <button className='btn'>
                <i className='fas fa-user-circle text-primary'></i> Edit Profile
              </button>
              <button
                className={`btn ${manageCourses ? 'btn-primary' : ''}`}
                onClick={this.onManageCourses}
              >
                <i
                  className={`fab fa-black-tie ${
                    manageCourses ? 'text-light' : 'text-primary'
                  }`}
                ></i>{' '}
                Manage Courses
              </button>
              <button
                className={`btn ${manageEnrolls ? 'btn-primary' : ''}`}
                onClick={this.onManageEnrolls}
              >
                <i
                  className={`fab fa-black-tie ${
                    manageEnrolls ? 'text-light' : 'text-primary'
                  }`}
                ></i>{' '}
                Manage Enrolls
              </button>
              <button
                className={`btn ${myEnrolls ? 'btn-primary' : ''}`}
                onClick={this.onMyEnrolls}
              >
                <i
                  className={`fas fa-graduation-cap ${
                    myEnrolls ? 'text-light' : 'text-primary'
                  }`}
                ></i>{' '}
                My Enrolls
              </button>
            </div>
            {manageCourses && (
              <>
                <h2 className='my-2'>Manage Courses</h2>
                {!courses.length ? (
                  <Loader />
                ) : (
                  <UserCourseList courses={courses} />
                )}
                <Link to='/add'>
                  <button href='/#' className='btn my-1'>
                    <i className='fas fa-plus-square'></i> Add Course
                  </button>
                </Link>
              </>
            )}
            {myEnrolls && (
              <>
                <h2 className='my-2'>My Enrolls</h2>
                {!courses.length ? (
                  <Loader />
                ) : (
                  <UserEnrollList enrolls={enrolls} />
                )}
              </>
            )}
            {manageEnrolls && (
              <>
                <h2 className='my-2'>Manage Enrolls</h2>
                {!courses.length ? (
                  <Loader />
                ) : (
                  <UserEnrollManageList
                    enrolls={enrolls}
                    onConfirmEnroll={this.onConfirmEnroll}
                  />
                )}
              </>
            )}
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
  loggedInUser: state.auth.loggedInUser,
  enrolls: state.enrolls.enrolls,
});

const mapDispatchToProps = {
  loadCourses,
  loadEnrolls,
  saveEnroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
