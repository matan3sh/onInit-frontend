import HttpService from './HttpService';

export default {
  getUsers,
  getById,
  remove,
  update,
};

function getUsers() {
  return HttpService.get('user');
}

function getById(userId) {
  return HttpService.get(`user/${userId}`);
}
function remove(userId) {
  return HttpService.delete(`user/${userId}`);
}

function update(user) {
  return HttpService.put(`user/${user._id}`, user);
}
