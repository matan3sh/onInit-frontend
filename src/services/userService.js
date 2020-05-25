import Axios from 'axios'

const login = async (userCredentials) => {
    try {
        const res = await Axios.post('/api/auth/login', userCredentials);
        return _handleLogin(res.data);
    } catch(err){
        console.log('Invalid credentials');
        throw err;
    }
    
}

const signup = async (userCredentials) => {
    try {
        const res = await Axios.post('/api/auth/login', userCredentials);
        return _handleLogin(res.data)
    } catch(err) {
        console.log('Cannot signup right now, try again later');
        throw err;
    }
}

const logout = async () => {
    try {
        await Axios.post('/api/auth/logout');
        sessionStorage.clear();
    } catch(err) {
        console.log('Cannot logout now, try again later');
        throw err;
    }
}

const getLoggedInUser = () => {
    return JSON.parse(sessionStorage.getItem('user'))
}

export default {
    login,
    signup,
    logout,
    getLoggedInUser
}

const _handleLogin = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
}