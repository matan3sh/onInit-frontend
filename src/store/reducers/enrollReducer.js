const initialState = {
  enrolls: [],
  enroll: null,
};

export default function enrollReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ENROLLS':
      return {
        ...state,
        enrolls: action.payload,
      };
    case 'SET_ENROLL':
      return {
        ...state,
        enroll: action.payload,
      };
    case 'ADD_ENROLL':
      return {
        ...state,
        enrolls: [...state.enrolls, action.payload],
      };
    case 'UPDATE_ENROLL':
      return {
        ...state,
        enrolls: state.enrolls.map((enroll) =>
          enroll._id === action.payload._id ? action.payload : enroll
        ),
      };
    default:
      return state;
  }
}
