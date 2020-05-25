import userService from '../../services/userService'

export function login(userCredentials) {
    return async (dispatch) => {
        const user = await userService.login(userCredentials)
        dispatch(setUser(user))
    }
}

export function signup(userCredentials) {
    return async (dispatch) => {
        const user = await userService.signup(userCredentials)
        dispatch(setUser(user))
    }
}

export function logout() {
    return async (dispatch) => {
        await userService.logout();
        dispatch(setUser(null));
    }
}

export function setUser(user) {
    return {type: 'SET_LOGGED_IN_USER', payload: user}
}