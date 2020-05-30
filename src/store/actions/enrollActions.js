import enrollService from '../../services/enrollService';

export function loadEnrolls() {
  return async (dispatch) => {
    try {
      const enrolls = await enrollService.getEnrolls();
      dispatch({ type: 'SET_ENROLLS', payload: enrolls });
    } catch (err) {
      console.log('Error in Loading Enrolls', err);
    }
  };
}

export function loadEnroll(id) {
  return async (dispatch) => {
    try {
      const enroll = await enrollService.getById(id);
      dispatch({ type: 'SET_ENROLL', payload: enroll });
    } catch (err) {
      console.log('Error in Loading Enroll', err);
    }
  };
}

export function saveEnroll(enroll) {
  return async (dispatch) => {
    try {
      const savedEnroll = await enrollService.add(enroll);
      dispatch({ type: 'ADD_ENROLL', payload: savedEnroll });
    } catch (err) {
      console.log('EnrollActions: err in saveEnroll', err);
    }
  };
}

export function updateEnroll(enroll) {
  return async (dispatch) => {
    try {
      const updatedEnroll = await enrollService.update(enroll);
      dispatch({ type: 'UPDATE_ENROLL', payload: updatedEnroll });
    } catch (err) {
      console.log('EnrollActions: err in updateEnroll', err);
    }
  };
}
