import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';
import { setUser } from '../store/actions/authActions';
import userService from '../services/userService'

import { Loader } from '../components/Layout/Loader';
import { CourseList } from '../components/Course/CourseList';
import { CategoryFilter } from '../components/Course/Filter/CategoryFilter';


class CourseApp extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    const loggedInUser = userService.getLoggedInUser()
    if(loggedInUser) setUser(loggedInUser)
    
    setTimeout(() => {
      if (this.props.location === null)
        this.props.loadCourses(this.state.filterBy);
      else {
        const location = { byLocation: this.props.location };
        this.props.loadCourses(location);
      }
    }, 1000);
  }

  onShowAll = () => {
    this.props.loadCourses();
  };

  onFilterByLocation = (filterBy) => {
    this.setState({ filterBy }, () => {
      const location = { byLocation: filterBy };
      this.props.loadCourses(location);
    });
  };

  onFilterByCategory = (filterBy) => {
    this.setState({ filterBy }, () => {
      const category = { byCategory: filterBy };
      this.props.loadCourses(category);
    });
  };

  render() {
    const { courses } = this.props;
    return (
      <section>
        {!courses.length ? (
          <Loader />
        ) : (
          <div className='container'>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse and connect with
              courses
            </p>
            <CategoryFilter
              onFilterByCategory={this.onFilterByCategory}
              onShowAll={this.onShowAll}
            />
            <div className='grid-1'>
              <CourseList courses={courses} />
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
});

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseApp);
