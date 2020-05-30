import HttpService from './HttpService';

export default {
  getEnrolls,
  getById,
  remove,
  update,
  add,
};

function getEnrolls() {
  return HttpService.get('enroll');
}

function getById(enrollId) {
  return HttpService.get(`enroll/${enrollId}`);
}
function remove(enrollId) {
  return HttpService.delete(`enroll/${enrollId}`);
}

function update(enroll) {
  return HttpService.put(`enroll/${enroll._id}`, enroll);
}

function add(enroll) {
  return HttpService.post(`enroll`, enroll);
}
