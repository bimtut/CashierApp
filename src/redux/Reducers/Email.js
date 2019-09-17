const initialState = {
    emailList: [],
    isLoading: false,
    isFullfilled: false,
    isRejected: false,
}

const email = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_EMAIL_PENDING':
            return {
                ...state,
                isLoading: true,
                isFullfilled: false,
                isRejected: false,
            };
        case 'POST_EMAIL_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_EMAIL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFullfilled: true,
                emailList: action.payload.data.result
            };
        default:
            return state;
    }
}

export default email