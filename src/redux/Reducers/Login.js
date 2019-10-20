const initialState = {
    loginList: [],
    isLoading: false,
    isFullfilled: false,
    isRejected: false,
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isFullfilled: false,
                isRejected: false,
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGIN_FULFILLED':
                console.log('ini data dari action ', action)

            return {
                ...state,
                isLoading: false,
                isFullfilled: true,
                // loginList: action.payload.data.result || 'beha ibu'
            };
        case 'LOGOUT_PENDING':
            return {
                ...state,
                isLoading: true,
                isFullfilled: false,
                isRejected: false,
            };
        case 'LOGOUT_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'LOGOUT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFullfilled: true,
                loginList: action.payload.data.result
            };
        default:
            return state;
    }
}

export default login