import axios from 'axios';

const url = 'https://cashereonline.herokuapp.com';

export const getProduct = () => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`${url}/product/`),

    }
};

export const postProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios.post(`${url}/product/`, data)
    }
};