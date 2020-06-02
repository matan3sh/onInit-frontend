import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

import HomeHero from '../components/Home/HomeHero';
import { HomeFooter } from '../components/Home/HomeFooter';
import { HomeGuide } from '../components/Home/HomeGuide';
import HomeStatistics from '../components/Home/HomeStatistics';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadCourses } from '../store/actions/courseActions';
import { setUser } from '../store/actions/authActions';
import authService from '../services/authService';

import { Loader } from '../components/Layout/Loader';
import { CourseListHome } from '../components/Course/CourseListHome';

class Home extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) setUser(loggedInUser);

    setTimeout(() => {
      this.props.loadCourses(this.props.filterBy);
    }, 500);
  }

  render() {
    const { courses, loggedInUser } = this.props;
    return (
      <section>
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {(props) => (
            <div style={props}>
              <HomeHero />
            </div>
          )}
        </Spring>
        {courses === null ? (
          <Loader />
        ) : (
          <div className='container-home'>
            <div className='flex' style={{ marginTop: '20px' }}>
              <p className='lead text-bold'> Recently Viewed</p>
              <Link to='/course'>
                <p className='mb-1 text-bold text-grey'>See More ></p>
              </Link>
            </div>
            <div className='grid-1'>
              <CourseListHome courses={courses} loggedInUser={loggedInUser} />
              <p className='lead text-bold my-1 g-card-header'>
                {' '}
                Journey to Success
              </p>
              <HomeGuide />
              <HomeStatistics />
            </div>
          </div>
        )}
        <HomeFooter />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
  filterBy: state.courseApp.filterBy,
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
