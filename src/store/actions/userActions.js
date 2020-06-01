import userService from '../../services/userService';

export function loadUsers() {
  return async (dispatch) => {
    try {
      const users = await userService.getUsers();
      dispatch(setUsers(users));
    } catch (err) {
      console.log('Error in Loading Users', err);
    }
  };
}

export function loadUser(id) {
  return async (dispatch) => {
    try {
      const user = await userService.getById(id);
      console.log(user);
      dispatch(setUser(user));
    } catch (err) {
      console.log('Error in Loading Users', err);
    }
  };
}

export function saveUser(user) {
  return async (dispatch) => {
    try {
      const updatedUser = await userService.update(user);
      dispatch(setUser(updatedUser));
    } catch (err) {
      console.log('Error in Loading Users', err);
    }
  };
}

export function removeUser(userId) {
  return async (dispatch) => {
    try {
      await userService.remove(userId);
      dispatch(_removeUser(userId));
    } catch (err) {
      console.log('Error in remove User', err);
    }
  };
}

export function clearUser() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_USER' });
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user,
  };
}
function setUsers(users) {
  return {
    type: 'SET_USERS',
    payload: users,
  };
}

function _removeUser(userId) {
  return {
    type: 'USER_REMOVE',
    userId,
  };
}
