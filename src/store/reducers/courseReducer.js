const initialState = {
  courses: [],
  course: null,
  filterBy: { name: '', location: '', category: '' },
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_COURSES':
      return {
        ...state,
        courses: action.payload,
      };
    case 'SET_COURSE':
      return {
        ...state,
        course: action.payload,
      };
    case 'ADD_COURSE':
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    case 'UPDATE_COURSE':
      return {
        ...state,
        courses: state.courses.map((course) =>
          course._id === action.payload._id ? action.payload : course
        ),
      };
    case 'CLEAR_COURSE':
      return {
        ...state,
        course: null,
      };
    case 'CLEAR_COURSES':
      return {
        ...state,
        courses: [],
      };
    case 'SET_FILTER':
      return {
        ...state,
        filterBy: action.payload,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filterBy: { name: '', location: '', category: '' },
      };
    default:
      return state;
  }
}
