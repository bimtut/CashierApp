import axios from 'axios';

const url = 'https://cashereonline.herokuapp.com';

export const newTransaction = (userId, series, ppn, total, transactionItem) => {
    return {
        type: 'POST_TRANSACTION',
        payload: axios.post(`${url}/transaction/`, { userId: userId, series: series, ppn: ppn, total: total, transactions_items: transactionItem }),

    }
};

export const getTransaction = () => {
    return {
        type: 'GET_TRANSACTION',
        payload: axios.get(`${url}/transaction/`)
    }
};