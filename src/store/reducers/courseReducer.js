const initialState = {
  courses: [],
  course: null,
  location: null,
  name: null
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
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload,
      };
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
