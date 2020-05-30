import axios from 'axios';

const BASE_URL = '/api/user';
var gUsers = [];

export default {
  query,
  save,
  remove,
  getById,
};

function query() {
  return axios
    .get(BASE_URL)
    .then((res) => res.data)
    .then((users) => {
      gUsers = users;
      return users;
    });
}

function save(user) {
  var prm;
  if (user._id) prm = axios.put(`${BASE_URL}/${user._id}`, user);
  else prm = axios.post(BASE_URL, user);
  return prm
    .then((res) => res.data)
    .then((savedUser) => {
      const idx = _getIdxById(savedUser._id);
      gUsers[idx] = savedUser;
      return savedUser;
    });
}

function remove(id) {
  return axios.delete(`${BASE_URL}/${id}`).then(() => {
    const idx = _getIdxById(id);
    gUsers.splice(idx, 1);
  });
}

function getById(id) {
  return axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
}

function _getIdxById(id) {
  return gUsers.findIndex((user) => user._id === id);
}
