import HttpService from './HttpService';

async function login(userCred) {
  const user = await HttpService.post('auth/login', userCred);
  return _handleLogin(user);
}
async function signup(userCred) {
  const user = await HttpService.post('auth/signup', userCred);
  return _handleLogin(user);
}
async function logout() {
  await HttpService.post('auth/logout');
  sessionStorage.clear();
}
function _handleLogin(user) {
  sessionStorage.setItem('user', JSON.stringify(user));
  return user;
}

const getLoggedInUser = () => {
  return JSON.parse(sessionStorage.getItem('user'));
};

export default {
  login,
  logout,
  signup,
  getLoggedInUser,
};
