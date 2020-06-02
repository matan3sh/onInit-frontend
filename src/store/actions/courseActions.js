import courseService from '../../services/courseService';

export function loadCourses(filterBy) {
  return (dispatch) => {
    courseService
      .query(filterBy)
      .then((courses) => dispatch({ type: 'SET_COURSES', payload: courses }));
  };
}

export function loadCourse(id) {
  return (dispatch) => {
    courseService
      .getById(id)
      .then((course) => dispatch({ type: 'SET_COURSE', payload: course }));
  };
}

export function saveCourse(course) {
  return (dispatch) => {
    courseService
      .add(course)
      .then((addedCourse) =>
        dispatch({ type: 'ADD_COURSE', payload: addedCourse })
      );
  };
}

export function updateCourse(course) {
  return (dispatch) => {
    courseService
      .update(course)
      .then((updatedCourse) =>
        dispatch({ type: 'UPDATE_COURSE', payload: updatedCourse })
      );
  };
}

export function clearCourse() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_COURSE' });
  };
}

export function clearCourses() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_COURSES' });
  };
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER', payload: filterBy });
  };
}

export function clearFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_FILTER' });
  };
}
