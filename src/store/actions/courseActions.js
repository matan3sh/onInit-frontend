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
