// import transaksi from "../../../../pembanding/reactjs-redux-Cashier/src/Redux/Reducers/Transaksi";

const initialState = {
    transactionItems: [],
    isLoading: false,
    isFullfilled: false,
    isRejected: false,
}

const transaction = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isFullfilled: false,
                isRejected: false,
            };
        case 'POST_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'POST_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFullfilled: true,
                transactionItems: action.payload.data.result
            };
        case 'GET_TRANSACTION_PENDING':
            return {
                ...state,
                isLoading: true,
                isFullfilled: false,
                isRejected: false,
            };
        case 'GET_TRANSACTION_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_TRANSACTION_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFullfilled: true,
                transactionItems: action.payload.data.result
            };
        default:
            return state;
    }
}

export default transaction