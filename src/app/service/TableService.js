import axiosInstance from "../config/axiosInstance";

export const getTable = () => axiosInstance.get('/tables')
export const addTable = payload => axiosInstance.post('/tables',{...payload})