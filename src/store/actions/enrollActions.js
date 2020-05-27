import enrollService from '../../services/enrollService';

export function loadEnrolls() {
  return (dispatch) => {
    enrollService
      .query()
      .then((enrolls) => dispatch({ type: 'SET_ENROLLS', payload: enrolls }));
  };
}

export function loadEnroll(id) {
  return (dispatch) => {
    enrollService
      .getById(id)
      .then((enroll) => dispatch({ type: 'SET_ENROLL', payload: enroll }));
  };
}

export function saveEnroll(enroll) {
  const type = enroll._id ? 'UPDATE_ENROLL' : 'ADD_ENROLL';
  return (dispatch) => {
    enrollService
      .save(enroll)
      .then((savedEnroll) => dispatch({ type, payload: savedEnroll }));
  };
}
