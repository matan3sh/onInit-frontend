import authService from '../../services/authService';

export function login(userCredentials) {
  return async (dispatch) => {
    const user = await authService.login(userCredentials);
    console.log(user);
    dispatch(setUser(user));
  };
}

export function signup(userCredentials) {
  return async (dispatch) => {
    const user = await authService.signup(userCredentials);
    dispatch(setUser(user));
  };
}

export function logout() {
  return async (dispatch) => {
    await authService.logout();
    dispatch(setUser(null));
  };
}

export function setUser(user) {
  return { type: 'SET_LOGGED_IN_USER', payload: user };
}
