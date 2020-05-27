import React, { Component } from 'react';

import Hero from '../components/Layout/Hero';

import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';
import { setUser } from '../store/actions/authActions';
import authService from '../services/authService';

import { Loader } from '../components/Layout/Loader';
import { CourseList } from '../components/Course/CourseList';
import { CategoryFilter } from '../components/Course/Filter/CategoryFilter';
// import NameFilter from '../components/Course/Filter/NameFilter';

class CourseApp extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) setUser(loggedInUser);

    setTimeout(() => {
      if (this.props.location === null)
        this.props.loadCourses(this.state.filterBy);
      else {
        const location = { byLocation: this.props.location };
        this.props.loadCourses(location);
      }
      if (this.props.name === null) this.props.loadCourses(this.state.filterBy);
      else {
        const name = { byName: this.props.name };
        this.props.loadCourses(name);
      }
    }, 1000);
  }

  onFilterByLocation = (filterBy) => {
    this.setState({ filterBy }, () => {
      const location = { byLocation: filterBy };
      this.props.loadCourses(location);
    });
  };

  onFilterByCategory = (filterBy) => {
    if (filterBy === 'All') {
      this.props.loadCourses();
      return;
    }
    this.setState({ filterBy }, () => {
      const category = { byCategory: filterBy };
      this.props.loadCourses(category);
    });
  };

  onFilterByName = (filterBy) => {
    this.setState({ filterBy }, () => {
      const name = { byName: filterBy };
      this.props.loadCourses(name);
    });
  };

  render() {
    const { courses, loggedInUser } = this.props;
    return (
      <section>
        <Hero />
        {!courses.length ? (
          <Loader />
        ) : (
          <div className='container'>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse and connect with
              courses
            </p>
            {/* <NameFilter
            onFilterByName={this.onFilterByName}
            /> */}
            <CategoryFilter onFilterByCategory={this.onFilterByCategory} />
            <div className='grid-1'>
              <CourseList courses={courses} loggedInUser={loggedInUser} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseApp);
