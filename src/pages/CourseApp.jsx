import React, { Component } from 'react';
import Hero from '../components/Layout/Hero';
import { connect } from 'react-redux';
import {
  loadCourses,
  setFilterBy,
  clearFilterBy,
} from '../store/actions/courseActions';
import { setUser } from '../store/actions/authActions';
import authService from '../services/authService';
import { Loader } from '../components/Layout/Loader';
import { CourseList } from '../components/Course/CourseList';
import { CategoryFilter } from '../components/Course/Filter/CategoryFilter';

class CourseApp extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    const loggedInUser = authService.getLoggedInUser();
    if (loggedInUser) setUser(loggedInUser);

    setTimeout(() => {
      this.props.loadCourses(this.props.filterBy);
    }, 1000);
  }

  componentWillUnmount() {
    this.props.clearFilterBy();
  }

  onFilterByCategory = async (categoryName) => {
    await this.props.setFilterBy({
      ...this.props.filterBy,
      category: categoryName,
    });
    this.props.loadCourses(this.props.filterBy);
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
  filterBy: state.courseApp.filterBy,
  loggedInUser: state.auth.loggedInUser,
});

const mapDispatchToProps = {
  loadCourses,
  setFilterBy,
  clearFilterBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseApp);
