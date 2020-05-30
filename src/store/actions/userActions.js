import userService from '../../services/userService';

export function loadUsers() {
  return (dispatch) => {
    userService
      .query()
      .then((users) => dispatch({ type: 'SET_USERS', payload: users }));
  };
}

export function loadUser(id) {
  return (dispatch) => {
    userService
      .getById(id)
      .then((user) => dispatch({ type: 'SET_USER', payload: user }));
  };
}

export function saveUser(user) {
  const type = user._id ? 'UPDATE_USER' : 'ADD_USER';
  return (dispatch) => {
    userService
      .save(user)
      .then((savedUser) => dispatch({ type, payload: savedUser }));
  };
}
