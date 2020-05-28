import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourses } from '../store/actions/courseActions';
import { loadEnrolls, saveEnroll } from '../store/actions/enrollActions';
import { toast } from 'react-toastify';
import { CardSection } from '../components/Dashboard/CardSection';

import { Loader } from '../components/Layout/Loader';
import Navbar from '../components/Layout/Navbar';
import UserCourseList from '../components/User/UserCourseList';
import UserEnrollList from '../components/User/UserEnrollList';
import UserEnrollManageList from '../components/User/UserEnrollManageList';
import { UserProfileEdit } from '../components/User/UserProfileEdit';

class UserProfile extends Component {
  state = {
    userProfile: true,
    manageCourses: false,
    myEnrolls: false,
    manageEnrolls: false,
  };

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
      userProfile: false,
    });
  };

  onMyEnrolls = () => {
    this.setState({
      manageCourses: false,
      myEnrolls: true,
      manageEnrolls: false,
      userProfile: false,
    });
  };

  onManageEnrolls = () => {
    this.setState({
      manageCourses: false,
      myEnrolls: false,
      manageEnrolls: true,
      userProfile: false,
    });
  };

  onUserProfile = () => {
    this.setState({
      userProfile: true,
      manageCourses: false,
      myEnrolls: false,
      manageEnrolls: false,
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
    const { manageCourses, manageEnrolls, myEnrolls, userProfile } = this.state;
    return (
      <section>
        <Navbar bg={'#333'} />
        {loggedInUser === null ? (
          <h1>You are not authorized</h1>
        ) : (
          <div className='form-userprofile'>
            <CardSection
              courses={courses}
              loggedInUser={loggedInUser}
              enrolls={enrolls}
            />
            <div className='dash-buttons my-1'>
              <Link to='/course' className='btn'>
                <i className='fas fa-long-arrow-alt-left text-primary'></i> Back
                To Courses
              </Link>
              <button
                className={`btn ${userProfile ? 'btn-primary' : ''}`}
                onClick={this.onUserProfile}
              >
                <i className='fas fa-user-circle'></i> Edit Profile
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
            {userProfile && (
              <>
                <UserProfileEdit loggedInUser={loggedInUser} />
              </>
            )}
            {manageCourses && (
              <>
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
                {!courses.length ? (
                  <Loader />
                ) : (
                  <UserEnrollList enrolls={enrolls} />
                )}
              </>
            )}
            {manageEnrolls && (
              <>
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
