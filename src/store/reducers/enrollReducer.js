const initialState = {
  enrolls: [],
};

export default function enrollReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ENROLLS':
      return {
        ...state,
        enrolls: action.payload,
      };
    default:
      return state;
  }
}
