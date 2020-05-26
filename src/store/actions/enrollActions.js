import enrollService from '../../services/enrollService';

export function loadEnrolls(filterBy) {
  return (dispatch) => {
    enrollService
      .query()
      .then((enrolls) => dispatch({ type: 'SET_ENROLLS', payload: enrolls }));
  };
}
