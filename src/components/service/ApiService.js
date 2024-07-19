import axios from 'axios';

const API_URL = 'https://arsua-sb.yeems214.xyz';

export const loginAccount = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in', error);
        throw error;
    }
};

export const createAccount = async (accountDetails) => {
    try {
        const response = await axios.post(`${API_URL}/user/signup`, accountDetails);
        return response.data;
    } catch (error) {
        console.error('Error creating account', error);
        throw error;
    }
};

export const fetchDoctors = async () => {
    try {
        const response = await axios.get(`${API_URL}/doctors`);
        return response.data;
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error;
    }
};

export const addDoctor = async (doctorData) => {
    const response = await axios.post(`${API_URL}/doctors`, doctorData);
    return response.data;
};
