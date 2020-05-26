import axios from 'axios';

const BASE_URL = '/api/course';
var gCourses = [];

export default {
  query,
  save,
  remove,
  getById,
};

function query(filterBy) {
  var query = {};
  if (!filterBy) filterBy = {};
  if (filterBy.byLocation) query = { location: filterBy.byLocation };
  if (filterBy.byCategory) query = { category: filterBy.byCategory };
  if (filterBy.byName) query = { name: filterBy.byName };
  return axios
    .get(BASE_URL, { params: query })
    .then((res) => res.data)
    .then((courses) => {
      gCourses = courses;
      return courses;
    });
}

function save(course) {
  var prm;
  if (course._id) prm = axios.put(`${BASE_URL}/${course._id}`, course);
  else prm = axios.post(BASE_URL, course);
  return prm
    .then((res) => res.data)
    .then((savedCourse) => {
      const idx = _getIdxById(savedCourse._id);
      gCourses[idx] = savedCourse;
      return savedCourse;
    });
}

function remove(id) {
  return axios.delete(`${BASE_URL}/${id}`).then(() => {
    const idx = _getIdxById(id);
    gCourses.splice(idx, 1);
  });
}

function getById(id) {
  return axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
}

function _getIdxById(id) {
  return gCourses.findIndex((course) => course._id === id);
}
