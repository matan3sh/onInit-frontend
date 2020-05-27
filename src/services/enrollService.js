import axios from 'axios';

const BASE_URL = '/api/course/enrolls';
var gEnrolls = [];

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
        .then((enrolls) => {
            gEnrolls = enrolls;
            return enrolls;
        });
}

function save(enroll) {
    var prm;
    if (enroll._id) prm = axios.put(`${BASE_URL}/${enroll._id}`, enroll);
    else prm = axios.post(BASE_URL, enroll);
    return prm
        .then((res) => res.data)
        .then((savedEnroll) => {
            const idx = _getIdxById(savedEnroll._id);
            gEnrolls[idx] = savedEnroll;
            return savedEnroll;
        });
}

function remove(id) {
    return axios.delete(`${BASE_URL}/${id}`).then(() => {
        const idx = _getIdxById(id);
        gEnrolls.splice(idx, 1);
    });
}

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`).then((res) => res.data);
}

function _getIdxById(id) {
    return gEnrolls.findIndex((enroll) => enroll._id === id);
}