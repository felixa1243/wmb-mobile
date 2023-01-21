import axiosInstance from "../config/axiosInstance";

export const getTable = () => axiosInstance.get('/tables')