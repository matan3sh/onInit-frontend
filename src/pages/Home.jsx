import React, { Component } from 'react';

import HomeHero from '../components/Home/HomeHero';
import { HomeGuide } from '../components/Home/HomeGuide';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourses } from '../store/actions/courseActions';
import { setUser } from '../store/actions/authActions';
import authService from '../services/authService';

import { Loader } from '../components/Layout/Loader';
import { CourseList } from '../components/Course/CourseList';

class Home extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) setUser(loggedInUser);

    setTimeout(() => {
      this.props.loadCourses();
    }, 1000);
  }

  render() {
    const { courses, loggedInUser } = this.props;

    return (
      <section>
        <HomeHero />
        {!courses.length ? (
          <Loader />
        ) : (
          <div className='container'>
            <div className='flex'>
              <p className='lead text-bold mb-1'>
                {' '}
                <i className='fab fa-connectdevelop' /> Recently Viewed
              </p>
              <Link to='/course'>
                <p className='mb-1 text-bold'>See More ></p>
              </Link>
            </div>
            <div className='grid-1'>
              <CourseList
                courses={courses.slice(0, 4)}
                loggedInUser={loggedInUser}
              />
              <p className='lead text-bold my-1'>
                {' '}
                <i className='fas fa-chalkboard-teacher' /> Our Script
              </p>
              <HomeGuide />
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
  location: state.courseApp.location,
  name: state.courseApp.name,
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
