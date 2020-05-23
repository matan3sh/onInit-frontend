import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadCourses } from '../store/actions/courseActions';

import { Loader } from '../components/Layout/Loader';
import { CourseList } from '../components/Course/CourseList';
import CategoryFilter from '../components/Course/Filter/CategoryFilter';
import LocationFilter from '../components/Course/Filter/LocationFilter';
import RatingPriceFilter from '../components/Course/Filter/RatingPriceFilter';

class CourseApp extends Component {
  state = { filterBy: '' };

  componentDidMount() {
    setTimeout(() => this.props.loadCourses(this.state.filterBy), 1000);
  }

  onFilterBy = (filterBy) => {
    this.setState({ filterBy }, () =>
      this.props.loadCourses(this.state.filterBy)
    );
  };

  render() {
    const { courses } = this.props;
    return (
      <section>
        {!courses.length ? (
          <Loader />
        ) : (
          <>
            <p className='lead'>
              <i className='fab fa-connectdevelop' /> Browse and connect with
              courses
            </p>
            <CategoryFilter />
            <div className='profiles'>
              <div className='left-side'>
                <LocationFilter onFilterBy={this.onFilterBy} />
                <RatingPriceFilter />
              </div>
              <div className='right-side'>
                <CourseList courses={courses} />
              </div>
            </div>
          </>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courseApp.courses,
});

const mapDispatchToProps = {
  loadCourses,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseApp);
