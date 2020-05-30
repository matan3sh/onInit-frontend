import HttpService from './HttpService';

export default {
  query,
  add,
  remove,
  update,
  getById,
};

function query() {
  return HttpService.get('course');
}

function getById(id) {
  return HttpService.get(`course/${id}`);
}

function remove(id) {
  return HttpService.delete(`course/${id}`);
}

function update(course) {
  return HttpService.put(`course/${course._id}`, course);
}

async function add(course) {
  const addedToy = await HttpService.post('course/', course);
  return addedToy;
}
