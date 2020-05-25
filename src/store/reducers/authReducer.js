let localLoggedInUser = null
if(sessionStorage.user) localLoggedInUser = JSON.parse(sessionStorage.user)

const initialState = {
    loggedInUser: localLoggedInUser,
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_LOGGED_IN_USER': 
            return {...state, loggedInUser: action.payload};
        default:
            return state;
    }
}