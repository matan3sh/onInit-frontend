const initialState = {
  users: [],
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
