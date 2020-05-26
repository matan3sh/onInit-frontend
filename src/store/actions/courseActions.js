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
  const type = course._id ? 'UPDATE_COURSE' : 'ADD_COURSE';
  return (dispatch) => {
    courseService
      .save(course)
      .then((savedCourse) => dispatch({ type, payload: savedCourse }));
  };
}

export function setLocation(location) {
  return (dispatch) => {
    dispatch({ type: 'SET_LOCATION', payload: location });
  };
}

export function setName(name) {
  return (dispatch) => {
    dispatch({ type: 'SET_NAME', payload: name });
  };
}